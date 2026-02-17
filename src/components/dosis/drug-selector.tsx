
'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { fuzzySearch } from '@/lib/utils';
import type { Drug } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface DrugSelectorProps {
  selectedDrugId: string;
  onSelect: (id: string) => void;
  speciesKey: string;
}

export function DrugSelector({
  selectedDrugId,
  onSelect,
  speciesKey,
}: DrugSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredDrugs = useMemo(() => {
    return DB_MEDICAMENTOS.filter((drug: Drug) => {
      const hasDoseForSpecies =
        drug.parametros_dosificacion &&
        drug.parametros_dosificacion[speciesKey] &&
        drug.parametros_dosificacion[speciesKey].length > 0;
      if (!hasDoseForSpecies) return false;

      if (!searchTerm) return true;
      const q = searchTerm.toLowerCase();
      const matchName = fuzzySearch(searchTerm, drug.meta_data.nombre_generico);
      const matchCommercial = drug.meta_data.nombres_comerciales.some((n) =>
        fuzzySearch(searchTerm, n)
      );
      const matchFamily = drug.meta_data.grupo_farmacologico
        .toLowerCase()
        .includes(q);
      const matchUse = (
        drug.parametros_dosificacion[speciesKey] || []
      ).some((d) => d.indicacion.toLowerCase().includes(q));
      return matchName || matchCommercial || matchFamily || matchUse;
    });
  }, [searchTerm, speciesKey]);

  useEffect(() => {
    if (selectedDrugId) {
      const d = DB_MEDICAMENTOS.find((drug) => drug.id === selectedDrugId);
      if (d) setSearchTerm(d.meta_data.nombre_generico);
    } else {
      setSearchTerm('');
    }
  }, [selectedDrugId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
        <input
          type="text"
          className="w-full bg-transparent border-b-2 border-border py-3 pl-12 text-3xl font-black text-white outline-none focus:border-primary transition-all placeholder:text-muted-foreground"
          placeholder="Buscar Fármaco..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
            onSelect('');
          }}
          onFocus={() => setIsOpen(true)}
        />
        <ChevronDown
          className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-popover border border-border rounded-2xl shadow-2xl max-h-60 overflow-y-auto custom-scrollbar z-50 animate-in fade-in zoom-in-95 duration-200">
          {filteredDrugs.length > 0 ? (
            filteredDrugs.map((drug) => (
              <div
                key={drug.id}
                onClick={() => {
                  onSelect(drug.id);
                  setIsOpen(false);
                  setSearchTerm(drug.meta_data.nombre_generico);
                }}
                className="p-4 hover:bg-secondary cursor-pointer border-b border-border last:border-0 transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">
                    {drug.meta_data.nombre_generico}
                  </h4>
                  <Badge variant="secondary" className="text-[9px]">
                    {drug.meta_data.grupo_farmacologico.split(',')[0]}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {drug.meta_data.nombres_comerciales.join(', ')}
                </p>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-muted-foreground font-bold text-sm">
              No se encontraron resultados para "{speciesKey}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
