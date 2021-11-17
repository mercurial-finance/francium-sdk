import { filter } from 'lodash';
import allPools from './pools';

export const activePools = [
  'MEDIA-USDC[Raydium Fusion Pool]',
  'COPE-USDC[Raydium Fusion Pool]',
  'ALEPH-USDC[Raydium Fusion Pool]',
  'TULIP-USDC[Raydium Fusion Pool]',
  'SNY-USDC[Raydium Fusion Pool]',
  'SLRS-USDC[Raydium Fusion Pool]',
  'MNGO-USDC[Raydium Fusion Pool]',
  'LIKE-USDC[Raydium Fusion Pool]',
  'ATLAS-USDC[Raydium Fusion Pool]',
  'POLIS-USDC[Raydium Fusion Pool]',
  'GRAPE-USDC[Raydium Fusion Pool]',
  'SRM-USDC[Raydium Fusion Pool]',
  'whETH-USDC[Raydium Fusion Pool]',
  'whETH-SOL[Raydium Fusion Pool]',
  'weSUSHI-USDC[Raydium Fusion Pool]',
  'weUNI-USDC[Raydium Fusion Pool]',
  'STARS-USDC[Raydium Fusion Pool]',
  'weDYDX-USDC[Raydium Fusion Pool]',
  'weAXS-USDC[Raydium Fusion Pool]',
  'weSHIB-USDC[Raydium Fusion Pool]',

  'RAY-USDC[Raydium Fusion Pool]',
  'RAY-USDT[Raydium Fusion Pool]',
  'RAY-SOL[Raydium Fusion Pool]',
  'RAY-ETH[Raydium Fusion Pool]',
  'RAY-SRM[Raydium Fusion Pool]',
  
  'ATLAS-USDC[Orca Double-Dip]',
  'POLIS-USDC[Orca Double-Dip]',
  'mSOL-USDC[Orca Double-Dip]',
  'mSOL-USDT[Orca Double-Dip]',
  'ORCA-mSOL[Orca Double-Dip]',
  'BTC-mSOL[Orca Double-Dip]',
  'NINJA-SOL[Orca Double-Dip]',
  'mSOL-whETH[Orca Doubledip]',
  'SAMO-USDC[Orca Double-Dip]',
  'LIQ-USDC[Orca Double-Dip]',
  'PORT-USDC[Orca Double-Dip]',
  'COPE-USDC[Orca Double-Dip]',
  'ABR-USDC[Orca Double-Dip]',
  'mSOL-SOL[Orca Double-Dip]',

  'ORCA-USDC[Orca Aquafarm]',
  'ORCA-SOL[Orca Aquafarm]',
  'SOL-USDC[Orca Aquafarm]',
  'ETH-SOL[Orca Aquafarm]',
  'whETH-USDC[Orca Aquafarm]',
  'whETH-SOL[Orca Aquafarm]',
  'SBR-USDC[Orca Aquafarm]',
  'FTT-USDC[Orca Aquafarm]',
  'SRM-SOL[Orca Aquafarm]',
  'COPE-SOL[Orca Aquafarm]'
]

export const farmPools = filter(allPools, i => {
  const poolKey = `${i.pair}[${i.from}]`;
  return activePools.includes(poolKey);
});
