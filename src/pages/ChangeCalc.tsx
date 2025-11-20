import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import quarterImg from "../assets/quarter.png";
import dimeImg from "../assets/dime.png";
import nickelImg from "../assets/nickel.png";
import pennyImg from "../assets/penny.png";

type CoinKey = "quarters" | "dimes" | "nickels" | "pennies";

const COIN_VALUES: Record<CoinKey, number> = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1,
};

const COIN_IMAGES: Record<CoinKey, string> = {
    quarters: quarterImg,
    dimes: dimeImg,
    nickels: nickelImg,
    pennies: pennyImg,
};

function formatCurrency(cents: number) {
    return (cents / 100).toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
    });
}

const CoinRow: React.FC<{
    label: string;
    name: CoinKey;
    value: number;
    count: number;
    onInc: (n: number) => void;
    onDec: (n: number) => void;
    onSet: (v: number) => void;
    }> = ({ label, name, value, count, onInc, onDec, onSet }) => {
    return (
        <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 w-32">
            <img src={COIN_IMAGES[name]} alt={label} className="w-16 h-16 object-contain" />
            <div className="text-base font-semibold text-black">{label}</div>
        </div>

        <div className="flex items-center gap-2">
            <button
            type="button"
            onClick={() => onDec(1)}
            aria-label={`Decrease ${label}`}
            className="red-button px-2 py-1 rounded-md border border-gray-200 text-sm bg-white h-16"
            >
            −
            </button>

            <input
            type="number"
            min={0}
            value={count}
            onChange={(e) => onSet(Math.max(0, Math.floor(Number(e.target.value) || 0)))}
            className="w-20 text-center text-black rounded-md border border-gray-200 px-2 py-1 bg-white text-sm"
            aria-label={`${label} count`}
            />

            <button
            type="button"
            onClick={() => onInc(1)}
            aria-label={`Increase ${label}`}
            className="green-button px-2 py-1 rounded-md border border-gray-200 text-sm bg-white h-16"
            >
            +
            </button>
        </div>

        <div className="ml-auto text-sm text-black">
            {value}¢ each — <span className="font-medium">{count * value}¢</span>
        </div>
        </div>
    );
    };

    const ChangeAdder: React.FC = () => {
    const [counts, setCounts] = useState<Record<CoinKey, number>>({
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
    });

    const totalCents = useMemo(
        () =>
        (counts.quarters || 0) * COIN_VALUES.quarters +
        (counts.dimes || 0) * COIN_VALUES.dimes +
        (counts.nickels || 0) * COIN_VALUES.nickels +
        (counts.pennies || 0) * COIN_VALUES.pennies,
        [counts]
    );

    function update(key: CoinKey, next: number) {
        setCounts((s) => ({ ...s, [key]: Math.max(0, Math.floor(next)) }));
    }

    function inc(key: CoinKey, delta = 1) {
        setCounts((s) => ({ ...s, [key]: (s[key] || 0) + delta }));
    }

    function dec(key: CoinKey, delta = 1) {
        setCounts((s) => ({ ...s, [key]: Math.max(0, (s[key] || 0) - delta) }));
    }

    function clearAll() {
        setCounts({ quarters: 0, dimes: 0, nickels: 0, pennies: 0 });
    }

    function copyTotal() {
        navigator.clipboard?.writeText(`${formatCurrency(totalCents)} (${totalCents}¢)`);
    }

    return (
        <section className="container mx-auto px-6 py-6">
        <div className="rounded-xl bg-gray-300 shadow-raised border border-gray-200 p-4">
            <div className="flex items-start justify-between gap-4">
            <div>
                <h2 className="text-lg font-semibold text-gray-900">Coin adder</h2>
                <p className="text-sm text-gray-600 mt-1">
                Enter how many of each coin you have and see the total amount.
                </p>
            </div>

            <div className="shrink-0">
                <button
                onClick={copyTotal}
                disabled={totalCents === 0}
                className={`blue-button text-sm rounded-md px-3 py-2 border ${
                    totalCents === 0 ? "opacity-50 pointer-events-none" : "bg-white"
                }`}
                >
                Copy total
                </button>
            </div>
            </div>

            <div className="mt-4 space-y-3">
            <CoinRow
                label="Quarters"
                name="quarters"
                value={COIN_VALUES.quarters}
                count={counts.quarters}
                onInc={(n) => inc("quarters", n)}
                onDec={(n) => dec("quarters", n)}
                onSet={(v) => update("quarters", v)}
            />

            <CoinRow
                label="Dimes"
                name="dimes"
                value={COIN_VALUES.dimes}
                count={counts.dimes}
                onInc={(n) => inc("dimes", n)}
                onDec={(n) => dec("dimes", n)}
                onSet={(v) => update("dimes", v)}
            />

            <CoinRow
                label="Nickels"
                name="nickels"
                value={COIN_VALUES.nickels}
                count={counts.nickels}
                onInc={(n) => inc("nickels", n)}
                onDec={(n) => dec("nickels", n)}
                onSet={(v) => update("nickels", v)}
            />

            <CoinRow
                label="Pennies"
                name="pennies"
                value={COIN_VALUES.pennies}
                count={counts.pennies}
                onInc={(n) => inc("pennies", n)}
                onDec={(n) => dec("pennies", n)}
                onSet={(v) => update("pennies", v)}
            />
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="rounded-lg bg-gray-50 border border-gray-100 p-4 flex-1">
                <div className="text-black">Total</div>
                <div className="mt-2 text-5xl font-semibold text-gray-900">
                {formatCurrency(totalCents)}
                </div>
                <div className="text-sm text-gray-500 mt-3">{totalCents}¢</div>
            </div>

            <div className="flex items-center justify-between">
                <div></div>
                <button onClick={clearAll} className="red-button px-3 py-2 rounded-md border">
                Reset
                </button>
            </div>
            </div>
        </div>
        </section>
    );
    };

    const ChangeCalc: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-400">
        <Header title="Change Calculator" />
        <main className="grow">
            <ChangeAdder />
        </main>
        <Footer />
        </div>
    );
};

export default ChangeCalc;