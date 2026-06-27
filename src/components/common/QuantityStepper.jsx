import { Minus, Plus } from "lucide-react";

export const QuantityStepper = ({ quantity, onIncrement, onDecrement }) => (
  <div className="inline-grid h-10 grid-cols-[32px_34px_32px] overflow-hidden rounded-lg border border-fresh-500 bg-fresh-50 text-fresh-700 dark:bg-fresh-500/10">
    <button onClick={onDecrement} aria-label="Decrease quantity" className="grid place-items-center">
      <Minus size={14} />
    </button>
    <span className="grid place-items-center text-sm font-bold">{quantity}</span>
    <button onClick={onIncrement} aria-label="Increase quantity" className="grid place-items-center">
      <Plus size={14} />
    </button>
  </div>
);
