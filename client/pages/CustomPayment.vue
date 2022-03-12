<template>
  <div>
    <div class="h-screen flex items-center justify-center">
      <div class="w-80 flex justify-center items-center rounded-main">
        <form @submit.prevent="checkout" class="flex flex-col w-full">
          <input
            type="email"
            required
            placeholder="Email"
            v-model="email"
            class="rounded-main w-full h-10 pl-3 pr-3 text-black"
          />
          <input
            required
            type="text"
            class="mt-3 rounded-main w-full h-10 pl-3 pr-3 text-black"
            placeholder="Amount"
            v-model="amountFiltered"
            @keydown.space.prevent
          />
          <select
            v-model="currency"
            class="mt-3 text-black h-10 rounded-main pl-3 pr-3 bg-white"
          >
            <option>USD</option>
            <option>EUR</option>
          </select>
          <button
            type="submit"
            class="mt-3 bg-success duration-200 h-10 font-bold rounded-main"
          >
            Continue
          </button>
          <div v-if="error" class="text-error mt-3 text-center">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<router>
  {
    path: '/custom-payment'
  }
</router>

<script>
export default {
  data() {
    return {
      email: "",
      amount: "",
      minAmount: "1",
      currency: "USD",
      error: false,
    };
  },
  computed: {
    amountFiltered: {
      get() {
        return this.amount.replace(/[^0-9.]/g, "");
      },
      set(value) {
        if (value < this.minAmount) {
          this.error = `Amount can't be lower than ${this.minAmount} ${this.currency}`;
        } else {
          this.error = false;
        }
        this.amount = value;
      },
    },
  },
  methods: {
    async checkout() {
      if (!this.error) {
        let payopData = await this.$axios.$post("/checkout/custom-payment", {
          email: this.email,
          amount: this.amount,
          currency: this.currency,
        });
        if (payopData.status == 1) {
          window.location.replace("https://checkout.payop.com/en/payment/" + payopData.data);
        }
      }
    },
  },
};
</script>
