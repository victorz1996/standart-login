<template>
  <div>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <img
            id="icon"
            src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
            alt="User Icon"
          />
        </div>

        <!-- Login Form -->
        <form>
          <input
            id="login"
            type="text"
            class="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            id="password"
            type="text"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>

        <!-- Remind Passowrd -->
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.js" />

<style src="./login.css"></style>
