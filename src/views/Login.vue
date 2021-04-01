<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 orange--text text--accent-3"
                        >
                          Iniciar sesión a Photos
                        </h1>
                        <h4 class="text-center mt-4">
                          Asegure su Correo Electrónico para registrarse
                        </h4>
                        <v-form
                          ref="form"
                          v-model="valid"
                          lazy-validation
                          class="mt-5 px-4"
                        >
                          <v-text-field
                            v-model="form.email"
                            label="Correo"
                            name="email"
                            prepend-icon="email"
                            type="text"
                            color="orange accent-3"
                            :rules="emailRules"
                          />

                          <v-text-field
                            v-model="form.password"
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="orange accent-3"
                            :rules="passwordRules"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">
                          Olvidaste tu contraseña?
                        </h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          rounded
                          color="orange accent-3"
                          dark
                          @click="submit"
                          >INICIAR SESIÓN</v-btn
                        >
                        <div class="text-center mt-4 mb-3">
                          <v-btn class="mx-2 my-3" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      class="orange accent-3 align-center"
                    >
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Bienvenido a Photos!
                        </h1>
                        <h5 class="text-center my-3">
                          Comparte tus datos para registrarse
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >REGISTRARSE</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="orange accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Bienvenido de Nuevo!
                        </h1>
                        <h5 class="text-center my-3">
                          Para mantenerse conectado con nosotros, inicie sesión
                          con su información personal
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >INICIAR SESIÓN</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 orange--text text--accent-3"
                        >
                          Crear Cuenta
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-5">
                          Comparte tus datos para registrarse
                        </h4>
                        <v-form
                          ref="formRegister"
                          v-model="validRegister"
                          lazy-validation
                          class="mt-5 px-4" 
                        >
                          <v-text-field
                            v-model="formRegister.name"
                            label="Name"
                            name="name"
                            prepend-icon="person"
                            type="text"
                            color="orange accent-3"
                            :rules="nameRules"
                          />
                          <v-text-field
                            v-model="formRegister.email"
                            label="Correo"
                            name="email"
                            prepend-icon="email"
                            type="text"
                            color="orange accent-3"
                            :rules="emailRules"
                          />

                          <v-text-field
                            v-model="formRegister.password"
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="orange accent-3"
                            :rules="passwordRules"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center my-5">
                        <v-btn
                          rounded
                          color="orange accent-3"
                          dark
                          @click="submitRegister"
                        >
                          REGISTRARSE</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
// import router from '../router'

const defaultForm = {
  email: null,
  password: null,
};

const defaultRegisterForm = {
  name: null,
  email: null,
  password: null,
};

export default {
  props: {
    source: String,
  },
  data: () => ({
    step: 1,
    valid: false,
    validRegister: false,
    form: Object.assign({}, defaultForm),
    formRegister: Object.assign({}, defaultRegisterForm),
    emailRules: [
      (v) => !!v || "Correo es requerido",
      (v) =>
        (v && v.length <= 50) || "Correo no debe ser mayor a 50 caracteres",
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Formato invalido",
    ],
    passwordRules: [
      (v) => !!v || "Contraseña es requerido",
      (v) =>
        (v && v.length <= 10) || "Contraseña no debe ser mayor a 10 caracteres",
    ],
    nameRules: [
      (v) => !!v || "Nombre es requerido",
      (v) =>
        (v && v.length <= 50) || "Nombre no debe ser mayor a 50 caracteres",
    ],
  }),
  methods: {
    ...mapActions(["loginAction"]),
    ...mapActions(["registerAction"]),
    submit() {
      if (this.$refs.form.validate()) {
        this.loginAction({
          email: this.form.email,
          password: this.form.password,
        });
      }
    },
    submitRegister() {
      if (this.$refs.formRegister.validate()) {
        this.registerAction({
          name: this.formRegister.name,
          email: this.formRegister.email,
          password: this.formRegister.password,
        });
      }
    },
  },
};
</script>