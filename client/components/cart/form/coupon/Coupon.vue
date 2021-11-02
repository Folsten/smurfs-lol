<template>
  <div class="flex w-full items-center mt-2">
    <input
      type="text"
      class="bg-primary rounded-main w-full h-10 pl-2 pr-2"
      placeholder="Coupon"
      v-model="coupon"
    />
    <div
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
    <!-- <div
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
      % Coupon Applied
    </div> -->
    <!-- <div
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
    </div> -->
  </div>
</template>

// :class="{
//   'text-text': this.coupon.isActive && this.coupon.isValid,
// }"

<script>
export default {
  computed: {
    coupon: {
      get() {
        return this.$store.getters["coupon/coupon"].code;
      },
      set(value) {
        this.$store.commit("cart/updateCoupon", value);
      },
    },
  },
};
</script>
