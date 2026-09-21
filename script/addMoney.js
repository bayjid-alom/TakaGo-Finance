document.getElementById("addmoney-btn").addEventListener("click", function () {

    const bank = getValueFromInput("bank-select");
    const number = getValueFromInput("account-number");
    const amount = getValueFromInput("add-amount");
    const pin = getValueFromInput("add-pin");

    if (bank === "" || bank === "Choose your bank") {
        alert("Please choose a bank before adding money to your account.");
        return;
    }

    if (number === "") {
        alert("Please enter your bank account number.");
        return;
    }

    if (!number.startsWith("01")) {
        alert("Your account number must start with 01.");
        return;
    }

    if (number.length !== 11) {
        alert("Your account number must contain exactly 11 digits.");
        return;
    }

    if (Number.isNaN(Number(number))) {
        alert("Your account number must contain only numbers.");
        return;
    }

    if (amount === "") {
        alert("Please enter the amount you want to add.");
        return;
    }

    if (Number.isNaN(Number(amount))) {
        alert("The amount must contain only numbers.");
        return;
    }

    if (Number(amount) <= 0) {
        alert("The amount must be greater than zero.");
        return;
    }

    if (pin === "") {
        alert("Please enter your four-digit PIN.");
        return;
    }

    if (Number.isNaN(Number(pin))) {
        alert("Your PIN must contain only numbers.");
        return;
    }

    if (pin.length !== 4) {
        alert("Your PIN must contain exactly four digits.");
        return;
    }

    const currentAmount = getBalance();
    const newBalance = currentAmount + Number(amount);

    if (pin === "1111") {

        const transactionTime = new Date().toLocaleString();

        alert(`Money added successfully. $${amount} has been added to your account from ${bank} at ${transactionTime}.`);

        setBalance(newBalance);

        const historyContainer = document.getElementById("history-container");
        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
            <div class="relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-white via-emerald-50/40 to-green-50 p-5 shadow-[0_8px_30px_rgba(16,185,129,.10)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_12px_35px_rgba(16,185,129,.20)]">

                <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-green-500 to-lime-400"></div>

                <div class="flex items-center gap-4">

                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-lg shadow-emerald-400/30">
                        <i class="fa-solid fa-circle-plus text-lg"></i>
                    </div>

                    <div class="flex-1">
                        <h4 class="font-semibold text-neutral">
                            Add Money
                        </h4>

                        <p class="text-sm leading-6 text-neutral/70">
                            $${amount} added from ${bank}.
                        </p>

                        <p class="text-xs text-neutral/50 mt-1">
                            ${transactionTime}
                        </p>
                    </div>

                    <div class="text-right">
                        <p class="font-bold text-emerald-600">
                            +$${amount}
                        </p>

                        <span class="text-xs text-emerald-600">
                            Successful
                        </span>
                    </div>

                </div>
            </div>
        `;

        historyContainer.appendChild(newHistory);
    } 
    
    else {
        alert("The PIN you entered is incorrect. Please enter the correct PIN and try again.");
        return;
    }

});