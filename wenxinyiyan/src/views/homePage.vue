<template>
  <load></load>
  <leftBar></leftBar>
  <leftMiddleBar></leftMiddleBar>
  <right></right>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js';
import leftBar from '@/slots/leftBar.vue'
import load from '../slots/load.vue';
import leftMiddleBar from '../slots/leftMiddleBar.vue';
import right from '../slots/right.vue';
export default {
  components: { leftBar, load, leftMiddleBar, right },
  mounted() {
    import ('@/assets/js/load/load.js');
    import ('@/assets/js/chat/chat.js');
    import ('bootstrap/dist/css/bootstrap.css');
    import ('../assets/css/chat/chatContainer.css');
    import ('../assets/css/leftbar.css');
    import ('../assets/css/gyt/Style.css');
    import ('../assets/css/carousel.css');
    import ('../assets/css/load/HomePageStyle.css');
    import ('../assets/css/leftMiddlePage/hoverStyle.css');
    import ('../assets/css/leftMiddlePage/leftMiddlePage.css');
  }
}
</script>