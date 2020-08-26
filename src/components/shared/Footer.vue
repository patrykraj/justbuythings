<template>
  <footer class="footer">
    <div class="footer-container">
      <h4>Site created by <span class="uppercase">krayesky&copy;</span></h4>
      <div class="contact">
        <h4 class="contact-header">Contact me:</h4>
        <div class="icon-links">
          <a
            class="contact-link"
            href="https://www.github.com/patrykraj"
            target="_blank"
          >
            <Github />
          </a>
          <a class="contact-link" href="mailto:patrykraj@interia.pl">
            <Mail />
          </a>
          <a
            class="contact-link"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Github from "vue-material-design-icons/Github.vue";
import Mail from "vue-material-design-icons/Mail.vue";
import Linkedin from "vue-material-design-icons/Linkedin.vue";

export default {
  name: "Footer",
  components: {
    Github,
    Mail,
    Linkedin,
  },
};
</script>

<style scoped>
.footer {
  background: #2c3e50;
  margin-top: 4rem;
  padding: 3rem 0;
  width: 100%;
  color: white;
}

.footer-container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: left;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.uppercase {
  text-transform: uppercase;
}

.contact {
  text-align: center;
}

.contact-header {
  margin-top: 0;
}

.contact-link {
  display: inline-block;
  margin: 5px;
}

.material-design-icon__svg {
  width: 30px;
  height: 30px;
  transform: scale(0.95);
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s;
}

.contact-link:hover .material-design-icon__svg {
  transform: scale(1);
  color: #42b883;
}

@media (max-width: 425px) {
  .footer-container {
    flex-flow: column-reverse;
  }
}
</style>
