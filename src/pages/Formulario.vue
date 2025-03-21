<template>
  <Message
    message="Formulário enviado com sucesso!"
    type="success"
    v-if="isSubmited"
  />
  <h1>Usuários</h1>
  <h2>Cadastrar Usuário</h2>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <br-input
        type="text"
        id="name"
        placeholder="Nome"
        label="Nome:"
        name="name"
        v-model-form="name"
        @blur="checkName"
        :state="errors.name ? 'danger' : null"
      ></br-input>
      <Message
        :message="errors.name"
        v-if="errors.name"
        feedback
        type="danger"
      />
    </div>

    <div class="mb-3">
      <div class="row">
        <div class="col">
          <br-input
            type="email"
            id="email"
            placeholder="E-mail"
            label="E-mail:"
            name="email"
            v-model-form="email"
            @blur="checkEmail"
            :state="errors.email ? 'danger' : null"
          ></br-input>
          <Message
            :message="errors.email"
            v-if="errors.email"
            feedback
            type="danger"
          />
        </div>
        <div class="col">
          <br-input
            type="text"
            id="mobile"
            placeholder="Ex.: (99) 99999-9999"
            label="Telefone Celular:"
            name="mobile"
            v-model-form="mobile"
            mask="(##) #####-####"
            @blur="checkMobile"
            :state="errors.mobile ? 'danger' : null"
          ></br-input>
          <Message
            :message="errors.mobile"
            v-if="errors.mobile"
            feedback
            type="danger"
          />
        </div>
      </div>
    </div>

    <div class="mb-3">
      <div class="row">
        <div class="col">
          <br-input
            type="password"
            id="password"
            placeholder="Senha"
            label="Senha:"
            name="password"
            ispassword
            v-model-form="password"
            @blur="checkPassword"
            :state="errors.password ? 'danger' : null"
          ></br-input>
          <Message
            :message="errors.password"
            v-if="errors.password"
            feedback
            type="danger"
          />
        </div>
        <div class="col">
          <br-input
            id="rg"
            placeholder="RG"
            label="RG:"
            name="rg"
            v-model-form="rg"
            @blur="checkRG"
            :state="errors.rg ? 'danger' : null"
          ></br-input>
          <Message
            :message="errors.rg"
            v-if="errors.rg"
            feedback
            type="danger"
          />
        </div>
      </div>
    </div>

    <div class="mb-3">
      <div class="row">
        <div class="col">
          <br-input
            type="text"
            id="cpf"
            placeholder="Ex.: 999.999.999-99"
            label="CPF:"
            name="cpf"
            v-model-form="cpf"
            mask="###.###.###-##"
            @blur="checkCPF"
            :state="errors.cpf ? 'danger' : null"
          ></br-input>
          <Message
            :message="errors.cpf"
            v-if="errors.cpf"
            feedback
            type="danger"
          />
        </div>
        <div class="col">
          <br-input
            type="text"
            id="birthDate"
            placeholder="Ex.: DD/MM/AAAA"
            label="Data de nascimento:"
            name="birthDate"
            v-model-form="birthDate"
            @blur="checkBirthDate"
            mask="##/##/####"
            :state="errors.birthDate ? 'danger' : null"
          ></br-input>
          <Message
            :message="errors.birthDate"
            v-if="errors.birthDate"
            feedback
            type="danger"
          />
        </div>
      </div>
    </div>

    <div class="mb-3">
      <div class="row">
        <div class="col">
          <br-input
            type="text"
            id="address"
            placeholder="Endereço"
            label="Endereço: (Opcional)"
            name="address"
            v-model-form="address"
            :state="errors.address ? 'danger' : null"
          ></br-input>
        </div>
        <div class="col">
          <br-input
            type="text"
            id="cep"
            placeholder="Ex.: 99999-999"
            label="CEP: (Opcional)"
            name="cep"
            v-model-form="cep"
            mask="#####-###"
            :state="errors.cep ? 'danger' : null"
          ></br-input>
        </div>
      </div>
    </div>

    <div class="mt-3 d-flex justify-content-md-end">
      <br-button
        id="enviar"
        label="Enviar Formulário"
        type="primary"
        class="mt-3 mr-1"
        @click="submitForm()"
      ></br-button>
    </div>
  </form>
  <div v-if="submittedUsers.length > 0">
    <h2>Usuários Cadastrados</h2>
    <br-list title="Usuário" id="submited-users" data-toggle="true">
      <br-item
        v-for="(user, index) in submittedUsers"
        :key="user.cpf"
        :title="user.name"
        :hover="true"
      >
        <br-list>
          <br-item :hover="true">
            <div class="row align-items-center">
              <div class="col-11">
                <p>E-mail: {{ user.email }}</p>
                <p>Telefone Celular: {{ user.mobile }}</p>
                <p>Senha: ************</p>
                <p>RG: {{ user.rg }}</p>
                <p>CPF: {{ user.cpf }}</p>
                <p>Data de Nascimento: {{ user.birthDate }}</p>
                <p v-if="user.address">Endereço: {{ user.address }}</p>
                <p v-if="user.cep">CEP: {{ user.cep }}</p>
              </div>
              <div class="col">
                <br-button
                  circle="true"
                  icon="trash"
                  type="primary"
                  @click="removeUser(user.cpf)"
                  aria-labelledby="Remover Usuário"
                ></br-button>
              </div>
            </div>
          </br-item>
        </br-list>
      </br-item>
    </br-list>
  </div>
</template>

<script lang="ts">
import Message from '../components/Message.vue';

export default {
  name: 'FormularioPage',
  components: {
    Message,
  },
  data() {
    return {
      name: '',
      email: '',
      mobile: '',
      password: '',
      rg: '',
      cpf: '',
      birthDate: '',
      address: '',
      cep: '',
      errors: {
        name: '',
        email: '',
        mobile: '',
        password: '',
        rg: '',
        cpf: '',
        birthDate: '',
        address: '',
        cep: '',
      },
      isSubmited: false,
      submittedUsers: [] as any[],
    };
  },
  methods: {
    checkName() {
      this.errors.name = !this.name ? 'O campo Nome é obrigatório.' : '';
    },
    checkEmail() {
      this.errors.email = !this.email ? 'O campo E-mail é obrigatório.' : '';
    },
    checkMobile() {
      this.errors.mobile = !this.mobile
        ? 'O campo Telefone é obrigatório.'
        : '';
    },
    checkPassword() {
      this.errors.password = !this.password
        ? 'O campo Senha é obrigatório.'
        : '';
    },
    checkRG() {
      this.errors.rg = !this.rg ? 'O campo RG é obrigatório.' : '';
    },
    checkCPF() {
      this.errors.cpf = !this.cpf ? 'O campo CPF é obrigatório.' : '';
    },
    checkBirthDate() {
      this.errors.birthDate = !this.birthDate
        ? 'O campo Data de Nascimento é obrigatório.'
        : '';
    },
    checkForm() {
      this.errors = {
        name: '',
        email: '',
        mobile: '',
        password: '',
        rg: '',
        cpf: '',
        birthDate: '',
        address: '',
        cep: '',
      };

      if (!this.name) {
        this.errors.name = 'O campo Nome é obrigatório.';
      }
      if (!this.email) {
        this.errors.email = 'O campo E-mail é obrigatório.';
      }

      if (!this.mobile) {
        this.errors.mobile = 'O campo Telefone é obrigatório.';
      }

      if (!this.password) {
        this.errors.password = 'O campo Senha é obrigatório.';
      }

      if (!this.rg) {
        this.errors.rg = 'O campo RG é obrigatório.';
      }

      if (!this.cpf) {
        this.errors.cpf = 'O campo CPF é obrigatório.';
      }

      if (!this.birthDate) {
        this.errors.birthDate = 'O campo Data de Nascimento é obrigatório.';
      }
      // Retorna true se não houver mensagens de erro
      return Object.values(this.errors).every((error) => error === '');
    },
    hideMessage() {
      setTimeout(() => {
        this.isSubmited = false;
      }, 10000);
    },
    submitForm() {
      if (this.checkForm()) {
        const data = {
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          password: this.password,
          rg: this.rg,
          cpf: this.cpf,
          birthDate: this.birthDate,
          address: this.address,
          cep: this.cep,
        };

        this.submittedUsers.push(data);
        this.hideMessage();
        this.isSubmited = true;
      }
    },
    removeUser(cpf: string) {
      const index = this.submittedUsers.findIndex((user) => user.cpf === cpf);
      if (index !== -1) {
        this.submittedUsers.splice(index, 1);
      }
    },
  },
};
</script>