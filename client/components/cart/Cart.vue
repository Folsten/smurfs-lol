<template>
  <div
    @mousedown.self="$store.commit('cart/toggle')"
    class="flex fixed overlay z-40"
    v-if="this.$store.state.cart.isActive"
  >
    <div
      class="
        relative
        max-w-xl
        w-full
        bg-secondary
        border border-gray
        rounded-main
        flex flex-col
        items-center
        p-5
        m-3
        max-h-almost
        overflow-y-auto
        xs:p-9
      "
    >
      <div
        @click="$store.commit('cart/toggle')"
        class="
          flex
          absolute
          justify-center
          items-center
          right-0
          top-0
          w-12
          h-12
          cursor-pointer
        "
      >
        <i class="fas fa-times text-2xl"></i>
      </div>
      <div
        class="
          text-2xl
          font-barlow font-semibold
          tracking-wide
          text-left
          w-full
        "
      >
        Checkout
      </div>
      <div class="pt-5 flex flex-col w-full">
        <CartProduct></CartProduct>
        <CartQuantityController></CartQuantityController>
        <CartForm></CartForm>
            <!-- <div class="flex w-full items-center mt-2">
              <input
                type="text"
                v-model="coupon.code"
                :class="{
                  'text-text': this.coupon.isActive && this.coupon.isValid,
                }"
                class="bg-primary rounded-main w-full h-10 pl-2 pr-2"
                placeholder="Coupon"
              />
              <div
                v-if="!this.coupon.isActive"
                @click="couponVerify"
                class="
                  bg-secondary
                  whitespace-nowrap
                  ml-2
                  h-full
                  flex
                  items-center
                  pl-3
                  pr-3
                  text-center
                  justify-center
                  font-barlow
                  text-base
                  border border-gray
                  rounded-main
                  cursor-pointer
                  hover:bg-secondaryLight
                "
              >
                Apply Coupon
              </div>
              <div
                v-if="this.coupon.isActive && this.coupon.isValid"
                class="
                  bg-success
                  whitespace-nowrap
                  ml-2
                  h-full
                  flex
                  items-center
                  pl-3
                  pr-3
                  text-center
                  justify-center
                  font-barlow
                  text-base
                  border border-gray
                  rounded-main
                  cursor-pointer
                "
              >
                {{ this.coupon.value }}% Coupon Applied
              </div>
              <div
                v-if="this.coupon.isActive && !this.coupon.isValid"
                class="
                  bg-error
                  whitespace-nowrap
                  ml-2
                  h-full
                  flex
                  items-center
                  pl-3
                  pr-3
                  text-center
                  justify-center
                  font-barlow
                  text-base
                  border border-gray
                  rounded-main
                  cursor-pointer
                "
              >
                Wrong Coupon
              </div>
            </div> -->
            <!-- <div class="mt-3 text-xs flex items-center">
              <label class="flex justify-center items-center">
                <input
                  type="checkbox"
                  v-model="this.isNewsletterAccepted"
                  class="mr-2 w-6 h-6 sm:w-4 sm:h-4"
                />
                Click the checkbox to get free RP and giveaways from our mailing
                list!
              </label>
            </div>
            <button
              v-if="!this.isCheckoutInProgress"
              type="submit"
              class="mt-4 primaryButton primaryButton_anime w-full items-center"
            >
              <i class="fas fa-shopping-cart pr-1"></i
              ><span>Checkout (${{ this.totalPrice }})</span>
            </button>
            <div
              v-if="this.isCheckoutInProgress"
              class="mt-4 primaryButton w-full items-center"
            >
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing
            </div>
            <div
              v-if="this.notification.isActive"
              class="text-sm pt-3 cart__notification"
              :class="this.notification.type"
            >
              {{ this.notification.message }}
            </div>
            <div class="pt-3 text-xs text-center">
              By clicking the button, you agree to our
              <router-link
                class="link hover:underline"
                to="/terms-and-conditions"
                @click="cart_isActive"
                >Terms & Conditions.</router-link
              >
            </div> -->
        <!-- <div class="flex justify-center mt-5 xs:mt-7 sm:mt-10">
          <img
            src="../../assets/img/paymentMethods/creditCards/Visa/Visa-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="../../assets/img/paymentMethods/creditCards/MasterCard/MasterCard-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="../../assets/img/paymentMethods/creditCards/Discover/Discover-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="../../assets/img/paymentMethods/creditCards/AmericanExpress/AmericanExpress-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="../../assets/img/paymentMethods/paymentSystems/Skrill/Skrill-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeCart() {},
    checkout() {},
  },
};
</script>
