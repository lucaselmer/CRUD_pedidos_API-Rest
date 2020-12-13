<template>
  <div class="form-produto mt-3 mx-auto">
    <p class="headline">Adicionar Produto</p>

    <div>
      <v-form v-model="formValidado">
        <v-text-field
          v-model="nome"
          :rules="[(v) => !!v || 'Nome é um campo obrigatório']"
          label="Nome"
          required>
        </v-text-field>

        <v-text-field
          v-model="valor"
          :rules="[(v) => !!v || 'Valor é um campo obrigatório']"
          type="number"
          label="Valor"
          required>
        </v-text-field>

        <v-btn
          :disabled="!formValidado"
          color="primary"
          class="mt-3"
          @click="adicionarProduto"
          >Salvar</v-btn>
      </v-form>

      <v-alert text
        v-if="msgSucesso != ''"
        color="teal"
        icon="mdi-account-check">
        {{ msgSucesso }}
      </v-alert>

      <v-alert v-if="msgErro != ''" text type="error" icon="mdi-account-remove">
        {{ msgErro }}
      </v-alert>
    </div>
  </div>
</template>

<script>
import ProductService from '../../services/ProductService.js'

export default {
    name:"create-product",
    data() {
        return {
            nome: "",
            valor: "",
            formValidado: "",
            msgSucesso: "",
            msgErro: ""
        }
    },
    methods: {
        adicionarProduto(){
            var produto = {
                nome: this.nome,
                valor: this.valor
            }

            ProductService.create(produto)
            .then(response => {
                this.msgSucesso = "O produto " +  response.data.nome + " foi criado com sucesso!";
                
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            })
        }
    }
    
}
</script>