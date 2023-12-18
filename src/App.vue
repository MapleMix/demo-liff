<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import liff from "@line/liff";
import background from "./components/Background.vue";
liff
  .init({
    liffId: "2002223677-1kKaYng5",
  })
  .then(() => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
    const accessToken = liff.getAccessToken();
    console.log(accessToken, "accessToken");
    const idToken = liff.getIDToken();
    console.log(idToken, "getIDToken");
    const idTokenDecoded = liff.getDecodedIDToken();
    console.log(idTokenDecoded, "idTokenDecoded");
  })
  .catch((err) => {
    console.log("err");
  });
</script>

<template>
  <background>
    <router-view></router-view>
  </background>
</template>

<style scoped></style>
