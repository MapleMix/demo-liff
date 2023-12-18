<script setup>
import router from "../router";
import { Button, Loading } from "vant";
import liff from "@line/liff";

import { reactive } from "vue";

const clientAPIs = reactive({
  cilck: false,
});

const handleChangeToProfile = () => {
  clientAPIs.cilck = true;
  setTimeout(() => {
    router.push({ name: "profile" });
  }, 2000);

  const lang = liff.i18n.setLang("en");
  console.log(lang, "555");
};

const handleClose = async () => {
  await liff.logout();
  location.reload();
  liff.closeWindow();
};
const handleCreateUrlBy = async () => {
  await liff.permanentLink
    .createUrlBy("https://9e5d-180-183-12-201.ngrok-free.app/profile?id=1")
    .then((permanentLink) => {
      // Create New URL => https://liff.line.me/2002223677-rbqoPv8l
      // alert(`Create New URL : ${permanentLink}`);
      // console.log(permanentLink);
      liff.openWindow({
        url: `${permanentLink}`,
        external: true,
      });
    });
};

const handleExtraQueryParam = async () => {
  await liff.permanentLink.setExtraQueryParam("user_tracking_id=8888");
  const myLink = liff.permanentLink.createUrl();
  // Create New URL => https://liff.line.me/2002223677-rbqoPv8l?code=JEX7C5ApD2MdMpLgKxYq&state=BCmrt9Fr7t7g&liffClientId=2002223677&liffRedirectUri=https%3A%2F%2Fdbed-180-183-12-201.ngrok-free.app&user_tracking_id=8888
  alert(`param = user_tracking_id=8888 : ${myLink}`);
  console.log(myLink);
  liff.openWindow({
    url: `${myLink}`,
    external: true,
  });
};
const handleShareTarget = () => {
  const context = liff.getContext();
  console.log(context, "context");
  console.log(
    liff.isApiAvailable("shareTargetPicker"),
    'liff.isApiAvailable("shareTargetPicker")'
  );
  if (liff.isApiAvailable("shareTargetPicker")) {
    liff
      .shareTargetPicker(
        [
          {
            type: "text",
            text: "Share Target Picker By mix",
          },
          {
            type: "image",
            originalContentUrl:
              "https://f.ptcdn.info/741/062/000/pnp6ur5jjfht1aVxM90n-o.jpg",
            previewImageUrl:
              "https://f.ptcdn.info/741/062/000/pnp6ur5jjfht1aVxM90n-o.jpg",
          },
        ],
        {
          isMultiple: true,
        }
      )
      .then(function (res) {
        if (res) {
          alert("success");
        } else {
          alert("error");
        }
      });
  }
};
const handleSendMessages = async () => {
  await liff
    .sendMessages([
      {
        type: "text",
        text: "Hello, World!",
      },
    ])
    .then(() => {
      alert("success");
      console.log("message sent");
    })
    .catch((err) => {
      alert("error");
      console.log("error", err);
    });
};
const handleLang = () => {
  const lang = liff.i18n.setLang("en");
  console.log(lang, "lang");
};

const handleFriendship = () => {
  liff.getFriendship().then((data) => {
    if (data.friendFlag) {
      alert(
        data.friendFlag
          ? "คุณเป็นเพื่อนกับ demo-liff แล้ว"
          : "คุณยังไม่ได้เป็นเพื่อนกับ demo-liff"
      );
    }
  });
};
</script>

<template>
  <div class="layout-home-page">
    <Loading
      class="button-group"
      color="#ffffff"
      vertical
      v-if="clientAPIs.cilck"
      >Loading...</Loading
    >
    <div :class="!clientAPIs.cilck ? 'button-group' : 'button-group-none'">
      <Button
        van-button
        type="success"
        class="button-home"
        @click="handleChangeToProfile"
        >Profile</Button
      >
      <Button
        plain
        type="primary"
        class="button-home"
        @click="handleShareTarget"
        >ShareTarget</Button
      >
      <Button
        plain
        type="primary"
        class="button-home"
        @click="handleSendMessages"
        >SendMessages</Button
      >
      <Button
        plain
        type="primary"
        class="button-home"
        @click="handleCreateUrlBy"
        >CreateUrlBy</Button
      >
      <Button
        plain
        type="primary"
        class="button-home"
        @click="handleExtraQueryParam"
        >ExtraQueryParam</Button
      >
      <Button plain type="primary" class="button-home" @click="handleFriendship"
        >Friendship</Button
      >
      <Button plain type="primary" class="button-home" @click="handleLang"
        >Lang</Button
      >
      <Button type="danger" class="button-home" @click="handleClose"
        >Logout</Button
      >
    </div>
  </div>
</template>

<style scoped>
.layout-home-page {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
}

.button-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  row-gap: 20px;
  width: 100%;
  margin: 10%;
}
.button-group-none {
  display: none;
}
.button-home {
  border-radius: 50px;
}
</style>
