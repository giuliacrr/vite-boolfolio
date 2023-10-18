<script>
import axios from 'axios'

export default {
  data(){
    return {
      formData: {
      name: "",
      email:"",
      message:"",
      attachment:"",
    },
    errors:null,
    success:null,
    loading:false,
    }
  },
  methods: {
    onFormSubmit(){  
      const dataToSend = new FormData();
      //Per prendere i dati devono essere inviati da un form sotto forma di
      //multipart/form.data altrimenti non verranno letti
      //codifichiamo i dati da passare con questo fomrato
      dataToSend.append("name", this.formData.name);
      dataToSend.append("email", this.formData.email);
      dataToSend.append("message", this.formData.message);
      dataToSend.append("attachment", this.formData.attachment);
      //usiamo post per inviare i dati             //come secondo arg. passiamo i dati (anche per PUT e PATCH)
      axios.post("http://127.0.0.1:8000/api/contacts", dataToSend)
      .then((resp)=>{
        this.success = resp.data.message;
        //Cancello errori precedenti così nascondo l'alert
        this.errors = null;
      })
      .catch((e)=>{// e contiene anche un( error.)response.data.message, dove il message
        //l'errore che sto ricevendo.
        //Noi controlliamo se c'è lerrore con i ? per creare ulteriori problemi.
                    //In caso non ho questo   --->   mi da questo
        this.errors = e.response?.data?.message ?? e.message;
      });
      //SE TUTTO è andato bene, nella tabella creata nel db dovremmo avere i dati
    },
    onAttachmentChange(event){
      
      const files = event.target.files;
      if (files.length > 0) {
        this.formData.attachment = files[0];
      } else {
        this.formData.attachment = null; //Chiedi florian perchè non andasse
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="mb-5 p-3 card-index transp-bg">
      <div class="container secondaryc-text text-center">
        <h1>Contact me!</h1>
        <p>Send me your name, email and optionals message and attachment!</p> 
      </div>
    <!--Nel caso dell'errore creiamo un altro alert con un messaggio, v-if="errors"-->
      <div class="alert alert-danger" v-if="errors">
        Something went wrong: {{ errors }}
      </div>
    <!--Qui faremo un form con tutte le informazioni che vogliamo farci dare dall'utente
    tipo email, nome e un messaggio. Aggiungeremo poi il bottone.
    Nello script faremo un v-model formData.name, .email etc-->
      <form @submit.prevent="onFormSubmit" v-if="!success">
      <!-- Mettiamo un  v-if="!success" con un alert con scritto un messaggio da mandare tramite un v-else,
      così se success=/true mostra il form altrimenti mostra l'alert-->
        <div class="mb-3">
          <label class="secondaryc-text fw-bold">Name</label>
          <input type="text" class="form-control" v-model="formData.name" />
        </div>

        <div class="mb-3">
          <label class="secondaryc-text fw-bold">Email</label>
          <input type="text" class="form-control" v-model="formData.email" />
        </div>

        <div class="mb-3">
          <label class="secondaryc-text fw-bold">Message</label>
          <textarea class="form-control" v-model="formData.message"></textarea>
        </div>
      <!--Per l'allegato mettiamo semplicemente un nuovo campo nel form con type="file" e NON possiamo usare il v-model  
      Poichè nel caso degli input dobbiamo lavorare sul input stesso 
      @change-->
        <div class="mb-3">
          <label class="secondaryc-text fw-bold">Attachment</label>
          <input class="form-control" type="file" @change="onAttachmentChange" />
        </div>

        <div class="text-center">
          <button type="submit" class="btn primaryc-btn text-white">Send</button>
        </div>
      </form>

      <div class="alert alert-success" v-else>
        {{ this.success }}
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped></style>