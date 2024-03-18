export default function TypeBuy({ moneyCard, setMoneyCard }) {
  function onChangeRadio() {
    if (moneyCard === "money") {
      setMoneyCard("card");
      return;
    } else {
      setMoneyCard("money");
      return;
    }
  }

  return (
    <section className="w-96 h-32 flex items-start justify-center gap-8 flex-col *:flex">
      <h4 className="text-[1.7rem]">Tipo de compra</h4>
      <div className="w-full justify-start items-center gap-14 font-normal *:flex">
        <label
          htmlFor="money"
          className="flex justify-between items-center w-28 gap-2 text-[1.6rem]"
        >
          <input
            type="radio"
            value="money"
            id="money"
            className="h-6 w-6 "
            checked={moneyCard === "money"}
            onChange={onChangeRadio}
          />
          Dinheiro
        </label>

        <label
          htmlFor="card"
          className="flex justify-between items-center w-28  gap-2 text-[1.6rem]"
        >
          <input
            type="radio"
            value="card"
            id="card"
            className="mr-2 h-6 w-6 "
            checked={moneyCard === "card"}
            onChange={onChangeRadio}
          />
          Cartão
        </label>
      </div>
    </section>
  );
}
