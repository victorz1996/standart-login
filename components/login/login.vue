<template>
  <v-container fluid>
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
        <v-form>
          <v-row no-gutters justify="center" class="text-center">
            <v-col cols="10">
              <v-text-field
                v-model="username"
                type="text"
                placeholder="Username"
                label="Username"
                outlined
              />
            </v-col>
            <v-col cols="10">
              <v-text-field
                v-model="password"
                autocomplete="new-password"
                type="password"
                placeholder="password"
                label="password"
                outlined
              />
            </v-col>
            <v-col cols="12" class="mb-5">
              <GenericButton color="primary" large @click="login">Log In</GenericButton>
            </v-col>
            <v-col>
              
            </v-col>
          </v-row>
        </v-form>

        <!-- Remind Passowrd -->
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script src="./login.js" />
<style scoped src="./login.css"></style>
