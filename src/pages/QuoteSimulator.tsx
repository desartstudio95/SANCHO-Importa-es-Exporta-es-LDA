import React, { useState, useEffect, useMemo } from 'react';
import { CATALOG_DATA, WHATSAPP_LINK } from '../constants';
import SEO from '../components/SEO';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  Globe, 
  Ship, 
  Plane, 
  ChevronRight, 
  ChevronLeft,
  Info,
  AlertCircle,
  Package,
  TrendingUp,
  FileText,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Equipment data for simulation (FOB prices in MZN and Weights in KG)
const SIMULATION_EQUIPMENT = [
  // Construction
  { id: 'escavadeira-sany-sy215c', name: 'Escavadeira SANY SY215C', price: 4200000, weight: 21900, category: 'construction' },
  { id: 'escavadeira-sany-sy500h', name: 'Escavadeira SANY SY500H', price: 12500000, weight: 50100, category: 'construction' },
  { id: 'betoneira-menegotti-400l', name: 'Betoneira Menegotti Prime 400L', price: 85000, weight: 180, category: 'construction' },
  { id: 'caminhao-betoneira-sany', name: 'Caminhão Betoneira SANY SY412C-8', price: 4100000, weight: 14500, category: 'construction' },
  { id: 'motoniveladora-sdlg', name: 'Motoniveladora SDLG G9138H', price: 5500000, weight: 13275, category: 'construction' },
  { id: 'rolo-vibratorio-ltc', name: 'Rolo Vibratório LTC203', price: 2800000, weight: 3300, category: 'construction' },
  { id: 'carregadeira-sdlg', name: 'Pá Carregadeira SDLG L918H', price: 2100000, weight: 6700, category: 'construction' },
  
  // Industrial
  { id: 'gerador-csdk-280l', name: 'Gerador CSDK-280L (Motor Kohler)', price: 850000, weight: 800, category: 'industrial' },
  { id: 'motor-toyama-diesel', name: 'Motor Diesel Toyama TDWE30RE-XP', price: 120000, weight: 180, category: 'industrial' },
  { id: 'reversor-maritimo', name: 'Reversor Marítimo Kawashima', price: 180000, weight: 120, category: 'industrial' },
  { id: 'compressor-tekna', name: 'Compressor de Ar Tekna CP8525', price: 45000, weight: 24, category: 'industrial' },
  
  // Agriculture
  { id: 'microtrator-oleomac', name: 'Microtrator Oleo-Mac WB65', price: 120000, weight: 150, category: 'agriculture' },
  { id: 'rocadeira-trator', name: 'Roçadeira Hidráulica Maqtron RT-1800', price: 150000, weight: 250, category: 'agriculture' },
  { id: 'debulhador-milho-maqtron', name: 'Debulhador de Milho Maqtron B-330', price: 95000, weight: 180, category: 'agriculture' },
  { id: 'pulverizador-adventure', name: 'Pulverizador Adventure Flex 200L', price: 110000, weight: 120, category: 'agriculture' },
  
  // Logistics
  { id: 'caminhao-basculante-shacman', name: 'Camião Basculante SHACMAN', price: 3600000, weight: 12500, category: 'logistics' },
  { id: 'caminhao-jiefang', name: 'Camião FAW Jiefang J6P', price: 3500000, weight: 9800, category: 'logistics' },
  { id: 'empilhadeira-cat', name: 'Empilhadeira Caterpillar', price: 2800000, weight: 4500, category: 'logistics' },
  { id: 'camiao-grua', name: 'Camião com Grua (Munk)', price: 4200000, weight: 13000, category: 'logistics' },
];

const QuoteSimulator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [freightType, setFreightType] = useState<'sea' | 'air'>('sea');
  const [isCalculating, setIsCalculating] = useState(false);

  const handleNext = () => {
    if (step === 2) {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setStep(prev => prev + 1);
      }, 1500);
    } else {
      setStep(prev => prev + 1);
    }
  };
  
  const handleBack = () => setStep(prev => prev - 1);

  const selectedItem = useMemo(() => 
    SIMULATION_EQUIPMENT.find(item => item.id === selectedId),
    [selectedId]
  );

  const calculation = useMemo(() => {
    if (!selectedItem) return null;

    const fob = selectedItem.price * quantity;
    const weight = selectedItem.weight * quantity;
    
    // Freight Estimation
    let freightCost = 0;
    if (freightType === 'sea') {
        freightCost = 65000 + (weight * 13); 
    } else {
        freightCost = 15000 + (weight * 650); 
    }

    const insurance = fob * 0.0075; 
    const cif = fob + freightCost + insurance;
    
    // Customs Duties (Mozambique)
    let dutyRate = 0.20; 
    switch(selectedItem.category) {
       case 'agriculture': dutyRate = 0.025; break;
       case 'construction': dutyRate = 0.05; break;
       case 'industrial': dutyRate = 0.075; break;
       case 'logistics': dutyRate = 0.20; break;
    }

    const duties = cif * dutyRate;
    const tsa = cif * 0.0085; // Kudumba/Scanner
    
    let portExpenses = 25000;
    if (weight > 10000) portExpenses = 45000;
    if (weight > 30000) portExpenses = 75000;

    const taxableBasisForVat = cif + duties;
    const vat = taxableBasisForVat * 0.16;

    const totalTaxes = duties + tsa + portExpenses + vat;
    const grandTotal = cif + totalTaxes;

    return {
      fob,
      freight: freightCost,
      insurance,
      cif,
      duties,
      tsa,
      mcnet: portExpenses,
      vat,
      totalTaxes,
      grandTotal
    };
  }, [selectedItem, quantity, freightType]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50 selection:bg-sancho-accent selection:text-white">
      <SEO 
        title="Simulador de Cotação de Importação"
        description="Calcule o custo real de importação de máquinas e equipamentos para Moçambique. Simulador de taxas aduaneiras, frete e impostos."
        keywords="simulador importação, taxas aduaneiras Moçambique, custo CIF, custo DDP"
        canonical="https://www.sanchotrading.com/simular-cotacao"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-sancho-primary text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg border-2 border-sancho-yellow"
          >
            <Calculator size={18} className="text-sancho-yellow" />
            Simulador de Importação Moçambique
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-sancho-primary mb-4 tracking-tight">
            Cotação Inteligente <span className="text-sancho-accent">SANCHO</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Calcule instantaneamente o custo real de importação, incluindo frete, seguros e todas as taxas alfandegárias vigentes em Moçambique.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-12 max-w-3xl mx-auto px-4">
          <div className="relative flex justify-between">
            {/* Background Line */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
            <motion.div 
              className="absolute top-5 left-0 h-0.5 bg-sancho-accent -z-10"
              initial={{ width: '0%' }}
              animate={{ width: `${((step - 1) / 2) * 100}%` }}
            ></motion.div>

            {[1, 2, 3].map(s => (
              <div key={s} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 border-4 ${
                  step >= s 
                    ? 'bg-sancho-accent border-white text-white shadow-xl scale-110' 
                    : 'bg-white border-slate-100 text-slate-300'
                }`}>
                  {step > s ? <CheckCircle2 size={20} /> : s}
                </div>
                <span className={`mt-3 text-[10px] font-black uppercase tracking-widest ${step >= s ? 'text-sancho-primary' : 'text-slate-400'}`}>
                  {s === 1 ? 'Equipamento' : s === 2 ? 'Logística' : 'Resultado'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden min-h-[500px] flex flex-col">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: SELECT EQUIPMENT */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12 flex-grow"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-sancho-accent/10 rounded-2xl flex items-center justify-center text-sancho-accent">
                      <Package size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-sancho-primary">O que pretende importar?</h2>
                      <p className="text-xs text-slate-500">Selecione o equipamento do nosso catálogo oficial</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {SIMULATION_EQUIPMENT.map(item => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all group ${
                          selectedId === item.id 
                            ? 'border-sancho-accent bg-sancho-accent/5 shadow-md' 
                            : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          selectedId === item.id ? 'bg-sancho-accent text-white' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <TrendingUp size={20} />
                        </div>
                        <div className="flex-grow">
                          <h3 className={`font-bold text-sm transition-colors ${selectedId === item.id ? 'text-sancho-primary' : 'text-slate-700'}`}>
                            {item.name}
                          </h3>
                          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                            {item.category === 'construction' ? 'Construção' : 
                             item.category === 'industrial' ? 'Industrial' : 
                             item.category === 'agriculture' ? 'Agricultura' : 'Logística'}
                          </span>
                        </div>
                        {selectedId === item.id && (
                          <div className="text-sancho-accent">
                            <CheckCircle2 size={20} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="mt-10 flex justify-end">
                    <button
                      disabled={!selectedId}
                      onClick={handleNext}
                      className={`px-10 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all ${
                        selectedId 
                          ? 'bg-sancho-primary text-white shadow-xl hover:bg-sancho-secondary transform hover:-translate-y-1' 
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Próximo Passo
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: LOGISTICS CONFIG */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12 flex-grow"
                >
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-sancho-accent/10 rounded-2xl flex items-center justify-center text-sancho-accent">
                        <Truck size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-sancho-primary">Configuração de Envio</h2>
                        <p className="text-xs text-slate-500">Defina a quantidade e o método de transporte</p>
                      </div>
                    </div>
                    <button onClick={handleBack} className="flex items-center gap-1 text-slate-400 hover:text-sancho-primary font-bold text-sm transition-colors">
                      <ChevronLeft size={18} /> Voltar
                    </button>
                  </div>

                  <div className="space-y-10">
                    {/* Quantity */}
                    <div>
                      <label className="block text-sm font-bold text-sancho-primary mb-4">Quantidade de Unidades</label>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center bg-slate-100 p-2 rounded-2xl border border-slate-200">
                          <button 
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-bold hover:bg-slate-50 transition-colors"
                          >-</button>
                          <span className="w-16 text-center text-2xl font-black text-sancho-primary">{quantity}</span>
                          <button 
                            onClick={() => setQuantity(q => q + 1)}
                            className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-bold hover:bg-slate-50 transition-colors"
                          >+</button>
                        </div>
                        <div className="text-slate-500 text-sm italic">
                          * Para frotas acima de 5 unidades, consulte descontos especiais.
                        </div>
                      </div>
                    </div>

                    {/* Freight Method */}
                    <div>
                      <label className="block text-sm font-bold text-sancho-primary mb-4">Método de Transporte Internacional</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                          onClick={() => setFreightType('sea')}
                          className={`p-6 rounded-3xl border-2 flex items-center gap-6 transition-all ${
                            freightType === 'sea' 
                              ? 'border-sancho-accent bg-sancho-accent/5 shadow-lg' 
                              : 'border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                            freightType === 'sea' ? 'bg-sancho-accent text-white' : 'bg-slate-100 text-slate-400'
                          }`}>
                            <Ship size={32} />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-sancho-primary">Via Marítima</h4>
                            <p className="text-xs text-slate-500">30-60 dias | Mais econômico</p>
                          </div>
                        </button>

                        <button
                          onClick={() => setFreightType('air')}
                          className={`p-6 rounded-3xl border-2 flex items-center gap-6 transition-all ${
                            freightType === 'air' 
                              ? 'border-sancho-accent bg-sancho-accent/5 shadow-lg' 
                              : 'border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                            freightType === 'air' ? 'bg-sancho-accent text-white' : 'bg-slate-100 text-slate-400'
                          }`}>
                            <Plane size={32} />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-sancho-primary">Via Aérea</h4>
                            <p className="text-xs text-slate-500">7-15 dias | Urgência</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="bg-sancho-accent text-white px-12 py-4 rounded-2xl font-bold text-base hover:bg-sancho-accent-hover transition-all shadow-xl shadow-sancho-accent/30 flex items-center gap-3"
                    >
                      Gerar Cotação Real
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: RESULTS & BREAKDOWN */}
              {step === 3 && calculation && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col h-full"
                >
                  {/* Result Header */}
                  <div className="bg-sancho-primary p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sancho-accent/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="text-center md:text-left">
                        <span className="text-sancho-accent font-bold text-[8px] uppercase tracking-[0.2em] mb-2 block">Estimativa de Custo Real (DDP)</span>
                        <h2 className="text-xl md:text-2xl font-black mb-2">{selectedItem?.name}</h2>
                        <div className="flex items-center gap-2 text-slate-300 text-xs justify-center md:justify-start">
                          <Globe size={14} />
                          <span>Entregue em Moçambique com impostos pagos</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 text-center min-w-[240px]">
                        <span className="text-[10px] font-bold text-sancho-yellow uppercase mb-1 block">Total Estimado</span>
                        <div className="text-2xl md:text-3xl font-black text-white">
                          {calculation.grandTotal.toLocaleString('pt-MZ')} <span className="text-base">MZN</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="p-8 md:p-12 bg-white flex-grow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      
                      {/* Left: Base Costs */}
                      <div>
                        <h3 className="text-sm font-black text-sancho-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                          <DollarSign size={16} className="text-sancho-accent" /> Custos de Origem & Logística
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b border-slate-50">
                            <span className="text-slate-500 text-sm">Valor FOB ({quantity} un)</span>
                            <span className="font-bold text-slate-700">{calculation.fob.toLocaleString('pt-MZ')} MZN</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-slate-50">
                            <span className="text-slate-500 text-sm">Frete Internacional ({freightType === 'sea' ? 'Marítimo' : 'Aéreo'})</span>
                            <span className="font-bold text-slate-700">{calculation.freight.toLocaleString('pt-MZ')} MZN</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-slate-50">
                            <span className="text-slate-500 text-sm">Seguro de Carga (0.75%)</span>
                            <span className="font-bold text-slate-700">{calculation.insurance.toLocaleString('pt-MZ')} MZN</span>
                          </div>
                          <div className="flex justify-between items-center py-4 px-4 bg-slate-50 rounded-xl mt-4">
                            <span className="font-black text-sancho-primary text-sm">VALOR CIF (Base Aduaneira)</span>
                            <span className="font-black text-sancho-primary">{calculation.cif.toLocaleString('pt-MZ')} MZN</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Taxes */}
                      <div>
                        <h3 className="text-sm font-black text-sancho-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                          <Info size={16} className="text-sancho-accent" /> Taxas & Impostos (Moçambique)
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b border-slate-50">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 text-sm">Direitos Aduaneiros (II)</span>
                              <div className="group relative">
                                <Info size={12} className="text-slate-300 cursor-help" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-[10px] rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                                  Taxa baseada na pauta aduaneira para esta categoria.
                                </div>
                              </div>
                            </div>
                            <span className="font-bold text-red-500">+{calculation.duties.toLocaleString('pt-MZ')} MZN</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-slate-50">
                            <span className="text-slate-500 text-sm">IVA (16%)</span>
                            <span className="font-bold text-red-500">+{calculation.vat.toLocaleString('pt-MZ')} MZN</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-slate-50">
                            <span className="text-slate-500 text-sm">Taxas Portuárias & Kudumba</span>
                            <span className="font-bold text-red-500">+{calculation.mcnet.toLocaleString('pt-MZ')} MZN</span>
                          </div>
                          <div className="flex justify-between items-center py-4 px-4 bg-red-50 rounded-xl mt-4 border border-red-100">
                            <span className="font-black text-red-700 text-sm">TOTAL DE IMPOSTOS</span>
                            <span className="font-black text-red-700">{calculation.totalTaxes.toLocaleString('pt-MZ')} MZN</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer & Actions */}
                    <div className="mt-12 p-6 bg-yellow-50 border border-yellow-100 rounded-3xl flex gap-4 items-start mb-10">
                      <AlertCircle className="text-yellow-600 shrink-0 mt-1" size={24} />
                      <div className="text-xs text-yellow-800 leading-relaxed">
                        <strong>Nota Importante:</strong> Esta simulação utiliza taxas de câmbio e pautas aduaneiras atuais. O valor final pode variar ligeiramente dependendo da flutuação do metical e taxas portuárias específicas no momento do desembaraço.
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => {
                          const message = `Olá SANCHO! Acabei de fazer uma simulação no site:
  
Equipamento: ${selectedItem.name}
Quantidade: ${quantity}
Frete: ${freightType === 'sea' ? 'Marítimo' : 'Aéreo'}

Resumo da Cotação:
- Valor FOB: ${calculation.fob.toLocaleString('pt-MZ')} MZN
- Frete: ${calculation.freight.toLocaleString('pt-MZ')} MZN
- Seguro: ${calculation.insurance.toLocaleString('pt-MZ')} MZN
- CIF: ${calculation.cif.toLocaleString('pt-MZ')} MZN
- Impostos: ${calculation.totalTaxes.toLocaleString('pt-MZ')} MZN

VALOR TOTAL ESTIMADO: ${calculation.total.toLocaleString('pt-MZ')} MZN

Gostaria de receber uma cotação oficial.`;
                          const encodedMessage = encodeURIComponent(message);
                          window.open(`https://wa.me/258874228160?text=${encodedMessage}`, '_blank');
                        }}
                        className="flex-grow bg-green-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center gap-4 shadow-xl shadow-green-500/30 transform hover:-translate-y-1"
                      >
                        <MessageCircle size={24} className="fill-current" />
                        Finalizar Cotação no WhatsApp
                      </button>
                      <button 
                        onClick={() => {
                          setStep(1);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-8 py-5 rounded-2xl font-bold text-slate-500 hover:text-sancho-primary border-2 border-slate-100 hover:border-slate-200 transition-all flex items-center justify-center gap-2"
                      >
                        <RefreshCw size={20} />
                        Nova Simulação
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading Overlay */}
            {isCalculating && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                <div className="w-20 h-20 border-4 border-slate-100 border-t-sancho-accent rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl font-bold text-sancho-primary animate-pulse">Calculando Taxas Aduaneiras...</h3>
                <p className="text-slate-500 text-sm mt-2">Consultando pauta de Moçambique 2024</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 text-sancho-accent">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sancho-primary text-sm mb-1">Cotação Segura</h4>
              <p className="text-[10px] text-slate-500">Valores baseados em dados reais de importação.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 text-sancho-accent">
              <FileText size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sancho-primary text-sm mb-1">Documentação</h4>
              <p className="text-[10px] text-slate-500">Cuidamos de todo o processo de desembaraço.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 text-sancho-accent">
              <Truck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sancho-primary text-sm mb-1">Logística Porta-a-Porta</h4>
              <p className="text-[10px] text-slate-500">Entregamos em qualquer província do país.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for Refresh Icon (since it wasn't imported)
const RefreshCw: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export default QuoteSimulator;
