import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('pt-PT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function calculateTourPrice(
  basePrice: number,
  additionalPassenger: number,
  passengers: number
) {
  const total = basePrice + additionalPassenger * (passengers - 1);
  return {
    passengers,
    total,
    perPerson: total / passengers,
  };
}

export function generatePriceTable(
  basePrice: number,
  additionalPassenger: number,
  maxPeople: number = 4
) {
  return Array.from({ length: maxPeople }, (_, i) => {
    const passengers = i + 1;
    return calculateTourPrice(basePrice, additionalPassenger, passengers);
  });
}
