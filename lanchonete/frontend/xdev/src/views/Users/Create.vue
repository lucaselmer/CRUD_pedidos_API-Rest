<template>
  <div class="form-produto mt-3 mx-auto">
    <p class="headline">Adicionar Produto</p>

    <div>
      <v-form v-model="formValido">
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="regrasEmail"
          required
          error-count="2"
        >
        </v-text-field>
        <v-text-field
          label="Senha"
          v-model="senha"
          min="8"
          counter
          :rules="regrasSenha"
          type="password"
          required
          error-count="2"
        >
        </v-text-field>
        <v-select
          :items="itens"
          v-model="tipo"
          :rules="regrasTipo"
          label="Tipo de usuário"
          item-text="nome"
          item-value="valor"
        >
        </v-select>

        <v-btn :disabled="!formValido" @click="adicionarUsuario" color="primary"
          >Criar</v-btn
        >
      </v-form>
      <v-alert
        text
        v-if="msgSucesso != ''"
        dense
        color="teal"
        icon="mdi-account-check"
        border="left"
      >
        {{ msgSucesso }}
      </v-alert>
      <v-alert
        v-if="msgErro != ''"
        text
        prominent
        type="error"
        icon="mdi-account-remove"
      >
        {{ msgErro }}
      </v-alert>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/UserService.js";

export default {
  data() {
    return {
      email: "",
      senha: "",
      tipo: "",
      formValido: "",
      msgSucesso: "",
      msgErro: "",
      itens: [
        { nome: "Administração", valor: "1" },
        { nome: "Balcão", valor: "2" },
        { nome: "Cozinha", valor: "3" },
      ],
      regrasEmail: [
        (v) => !!v || "E-mail precisa ser preenchido",
        (v) => /.+@.+/.test(v) || "E-mail é inválido",
      ],
      regrasSenha: [
        (v) => !!v || "Senha precisa ser preenchida",
        (v) =>
          (v && v.length >= 8) || "Senha precisa ter ao menos 8 caracteres",
      ],
      regrasTipo: [(v) => !!v || "Tipo de usuário precisa ser preenchido"],
    };
  },
  methods: {
    adicionarUsuario: function () {
      this.msgSucesso = "";
      this.msgErro = "";
      let dados = {
        email: this.email,
        senha: this.senha,
        tipo: this.tipo,
      };
      UserService.signup(dados)
        .then((response) => {
          this.msgSucesso = response.data;
        })
        .catch((e) => {
          this.msgErro = e;
          console.log(e);
        });
    },
  },
};
</script>