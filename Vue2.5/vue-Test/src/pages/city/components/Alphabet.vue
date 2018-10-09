<template>
  <ul class="list" >
    <li class="item"
        v-for="(item,key) in letters"
        :key="key"
        ref="item"
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >{{item}}
        </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    city: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.city) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs.item['0'].offsetTop
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // console.log(this.$refs)
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 使用定时器节流
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - this.startY - 79
          const index = Math.floor(touchY / 20)
          if (index >= 0 && this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '../../../assets/styles/varibles.styl'
 .list
  position: absolute
  display: flex
  flex-direction: column
  justify-content: center
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
