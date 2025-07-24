import { useState } from "react";
import axios from "axios";
import { PriceOption } from "../types/booking";
import styles from "./OptionSelect.module.css";

type Props = { options: PriceOption[] };

const OptionSelect = ({ options }: Props) => {
  const [selected, setSelected] = useState<PriceOption | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    if (!selected) return;
    setLoading(true);

    try {
      const { data } = await axios.post("/api/create-checkout", {
        priceId: selected.stripePriceId,
      });
      window.location.href = data.url;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <select
        className={styles.select}
        defaultValue=""
        onChange={(e) =>
          setSelected(
            options.find((o) => o.stripePriceId === e.target.value) || null
          )
        }
      >
        <option value="" disabled>
          Choose option
        </option>
        {options.map((opt) => (
          <option key={opt.stripePriceId} value={opt.stripePriceId}>
            {opt.label} - {opt.price} kr
          </option>
        ))}
      </select>
      <button className={styles.buyButton}
      disabled = {!selected || loading}
      onClick={handleBuy}
      >
        {loading? "Redirecting..." : "Buy now"}

      </button>
    </>
  );
};

export default OptionSelect;
