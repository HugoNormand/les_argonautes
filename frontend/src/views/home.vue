<template>
 <main class="main-section">
  <section class="addingPart">
   <h1>LES ARGONAUTES</h1>   
   <form action="" class="addingPart__form">
    <label for="">Nom de l'Argonaute</label>  
    <input v-model="this.crewname" type="text" name="" id="" placeholder="Ajouter l'argonaute" required>
    <button @click.prevent="postMember">προσθέστε</button>
   </form>
  </section>
  <section class="memberList">
    <h2>MEMBRES DE L'ÉQUIPAGE</h2>
    <ul>
     <li v-for="member in members"> > {{member.crewname}}</li>
    </ul>   
  </section>
 </main>
</template>

<script>
import { getMembers, postMember } from '../services/apiServices'
export default {
    data() {
        return {
            crewname: '',
            members: []
        }
    },
    created() {
        this.getMembers()
    },
    methods: {
        getMembers,
        postMember
    }
}
</script>

<style lang="scss">
@import '../assets/shared';
@import url('https://fonts.googleapis.com/css2?family=GFS+Neohellenic&display=swap');
body {
    color: $SECONDARY_COLOR;
}
#app {
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-section {
    height: 100vh;
    width: 95%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: $FONT;
    background-color: $PRIMARY_COLOR;
    border: 6px solid $TERTIARY_COLOR;
    box-shadow: 8px 10px 1px black;
    @media (max-width: 465px) {
        width: 100%;
        margin: 0;
    }
}
.addingPart {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media (max-width: 700px) {
        width: 80%
    }
    @media (max-width: 420px) {
        width: 95%
    }
    @media (max-width: 356px) {
        width: 100%;
    }
    h1 {
        font-size: 35px;
        margin-bottom: 15px;
        @media (max-width: 281px) {
            margin-left: 10px;
        }
    }
    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border: solid 1px $SECONDARY_COLOR;
        border-radius: 20px;
        background-color: $TERTIARY_COLOR;
        box-shadow: 7px 7px 1px black;
        font-size: 25px;
        padding: 10px;
        label, input {
            margin-bottom: 20px
        }
        input {
            height: 25px;
            width: 50%;
            border: none;
            border-radius: 10px;
            padding-left: 10px;
            font-family: $FONT;
            @media (max-width: 356px) {
                width: 80%
            }
        }
        button {
            background-color: $TERTIARY_COLOR;
            border: 1px solid black;
            width: 30%;
            height: 30px;
            margin-bottom: 5px;
            font-family: $FONT;
            font-size: 20px;
            box-shadow: 4px 4px 1px black;
            color: $SECONDARY-COLOR;
            transition: all 0.3s ease-in-out;
            @media (max-width: 356px) {
                width: 60%
            }
        }
        button:hover {
            cursor: pointer;
            box-shadow: none;
            border: none;
            transition: all 0.2s ease-in-out;
        }
        @media (max-width: 420px) {
            padding: 10px 0px 10px 0px;
        }
        @media (max-width: 356px) {
            border-radius: 0px;
            border: solid 1px $TERTIARY_COLOR;
            box-shadow: none;
        }
    }
}

.memberList {
    margin-bottom: 50px;
    h2 {
        font-size: 30px;
        margin-bottom: 15px;
        text-align: center;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid $SECONDARY_COLOR;
        padding-top: 10px;
        li {
            flex: 1 0 30%;
            font-size: 20px;
            margin: 5px;
            text-align: center;
            @media (max-width: 356px) {
                flex: 1 0 40%;
            }
        }
    }  
}
</style>