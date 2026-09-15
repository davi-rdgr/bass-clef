<script setup>
import { ref } from 'vue';
const tab = ref('one');
const enterLogin = ref('');
const enterPassword = ref('');
const enterCheckbox = ref(false);
const enterShowPassword = ref(false)

const createName = ref('');
const createLogin = ref('');
const createPassword = ref('');
const createUserTerms = ref(false);
const createShowPassword = ref(false);
</script>
<template>
    <main>
        <aside>
            <div class="logo">
                <img src="/images/bass-clef-white-image.png" alt="Bass Clef Logo">
                <h3>
                    BASS CLEF
                </h3>
            </div>
            <div class="titles">
                <h1>
                    Sua biblioteca, do jeito que você ouve.
                </h1>
                <h2>
                    Playlists, álbuns e artistas favoritos em um só lugar. Entre para continuar de onde parou.
                </h2>
            </div>
            <ul>
                <li>
                    Sugestões Fy
                </li>
                <li>
                    Playlists
                </li>
                <li>
                    Recomendações
                </li>
                <li>
                    Recentemente
                </li>
            </ul>
        </aside>
        <section class="login">
            <v-sheet class="vsheet" elevation="2">
                <v-tabs class="vtabs" v-model="tab" color="#17070A" bg-color="#0D0D10" selected-class="tab-selected"
                    :hide-slider='true' grow inset>
                    <v-tab class="vtab" value="enter">Entrar</v-tab>
                    <v-tab class="vtab" value="register">Criar conta</v-tab>
                </v-tabs>

                <v-tabs-window class="vwindow" v-model="tab">
                    <v-tabs-window-item class="tabwindow" value="enter">
                        <div>
                            <h1>
                                Bem-vindo de volta
                            </h1>
                            <h2>
                                Entre com seu e-mail para ouvir suas playlists.
                            </h2>
                            <v-form class="vform">
                                <v-label class="vlabel">
                                    E-MAIL
                                </v-label>
                                <v-text-field class="vinput" hide-details type="email" variant="outlined"
                                    v-model="enterLogin" placeholder="voce@email.com" />
                                <v-label class="vlabel">
                                    SENHA
                                </v-label>
                                <v-text-field class="vinput" hide-details
                                    :type="enterShowPassword ? 'text' : 'password'" variant="outlined"
                                    v-model="enterPassword" placeholder="Mínimo 6 caracteres" append-inner="MOSTRAR">
                                    <template #append-inner>
                                        <span class="show-password" @click="enterShowPassword = !enterShowPassword">
                                            {{ enterShowPassword ? ' OCULTAR' : 'MOSTRAR' }}
                                        </span>
                                    </template>
                                </v-text-field>
                                <div class="options">
                                    <v-checkbox class="vcheck" v-model="enterCheckbox" label="Manter conectado"
                                        base-color="#ffffff" color="#F2555E">
                                    </v-checkbox>
                                    <span class="forgot-pass">
                                        Esqueci minha senha
                                    </span>
                                </div>
                                <v-btn class="vsubmit" type="submit">
                                    Entrar
                                </v-btn>
                            </v-form>
                        </div>
                        <div>
                            <div class="or-continue">
                                <div class="line"></div>
                                <span>
                                    OU CONTINUE COM
                                </span>
                                <div class="line"></div>
                            </div>
                            <div class="alternative-login">
                                <v-btn class="btn">
                                    Google
                                </v-btn>
                                <v-btn class="btn">
                                    GitHub
                                </v-btn>
                            </div>
                            <span class="create-account">
                                Ainda não tem uma conta? <span>Criar agora</span>
                            </span>
                        </div>
                    </v-tabs-window-item>
                    <v-tabs-window-item class="tabwindow" value="register">
                        <div>
                            <h1>
                                Crie sua conta
                            </h1>
                            <h2>
                                Leva menos de um minuto. É grátis.
                            </h2>
                            <v-form class="vform">
                                <v-label class="vlabel">
                                    NOME
                                </v-label>
                                <v-text-field class="vinput" hide-details type="text" variant="outlined"
                                    v-model="createName" placeholder="Como devemos te chamar" />
                                <v-label class="vlabel">
                                    E-MAIL
                                </v-label>
                                <v-text-field class="vinput" hide-details type="email" variant="outlined"
                                    v-model="createLogin" placeholder="voce@email.com" />
                                <v-label class="vlabel">
                                    SENHA
                                </v-label>
                                <v-text-field class="vinput" hide-details
                                    :type="createShowPassword ? 'text' : 'password'" variant="outlined"
                                    v-model="createPassword" placeholder="Mínimo 6 caracteres" append-inner="MOSTRAR">
                                    <template #append-inner>
                                        <span class="show-password" @click="createShowPassword = !createShowPassword">
                                            {{ createShowPassword ? ' OCULTAR' : 'MOSTRAR' }}
                                        </span>
                                    </template>
                                </v-text-field>
                                <div class="options">
                                    <v-checkbox class="vcheck" v-model="createUserTerms"
                                        base-color="#ffffff" color="#F2555E">
                                        <template #label>
                                            <span>
                                                Concordo com os <span class="terms-highlight">termos de uso</span> e a
                                                política de privacidade.
                                            </span>
                                        </template>
                                    </v-checkbox>
                                </div>
                                <v-btn class="vsubmit" type="submit">
                                    Entrar
                                </v-btn>
                            </v-form>
                        </div>
                        <div>
                            <div class="or-continue">
                                <div class="line"></div>
                                <span>
                                    OU CONTINUE COM
                                </span>
                                <div class="line"></div>
                            </div>
                            <div class="alternative-login">
                                <v-btn class="btn">
                                    Google
                                </v-btn>
                                <v-btn class="btn">
                                    GitHub
                                </v-btn>
                            </div>
                            <span class="create-account">
                                Já tem uma conta? <span>Entrar</span>
                            </span>
                        </div>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-sheet>
        </section>
    </main>
</template>

<style scoped>
main {
    background: #0A0A0C;
    min-height: 100dvh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

aside {
    border-radius: 14px;
    max-width: 460px;
    width: 100%;
    height: 719px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(170deg, #f2555e 0%, #c0414c 34%, #5d2730 64%, #17151a 100%);
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo img {
    width: 36px;
}

.logo h3 {
    font-size: 15px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    margin: 0;
    letter-spacing: 0.22em;
}

.titles h1 {
    font-size: 40px;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    line-height: 1.08;
    margin: 0;
}

.titles h2 {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFFDB;
    width: 360px;
    margin: 10px 0 0 0;
}

ul {
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

ul li {
    padding: 7px 14px;
    background-color: #00000073;
    border-radius: 900px;
    width: fit-content;
}

.login {
    border-radius: 14px;
    max-width: 460px;
    width: 100%;
    height: 719px;
    padding: 30px;
    background-color: #121215;
    border: 1px solid #1F1F24;
    display: flex;
    flex-direction: column;
}

.vsheet {
    background-color: #121215;
    box-shadow: none !important;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
}

.vsheet:deep(.v-slide-group__content) {
    gap: 5px;
}

.vtabs {
    border-radius: 900px;
    height: auto !important;
    flex: none !important;
    padding: 5px;
    border: 1px solid #1F1F24;
}

.vtab {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #9A9AA4 !important;
    text-transform: none;
    letter-spacing: normal;
    border-radius: 900px !important;
    height: auto !important;
    padding: 11px 0;
}

.tab-selected {
    background-color: #f2555e;
    color: #17070A !important;
    box-shadow: 0 0 4px 2px #F2555E66 !important;
}

.vwindow {
    margin: 30px 0 0 0;
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
}

.vwindow:deep(.v-window__container) {
    flex: 1;
    min-height: 0;
}

.tabwindow {
    border: none;
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.vwindow h1 {
    font-size: 25px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    margin: 0;
    line-height: 100%;
}

.vwindow h2 {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #9A9AA4;
    margin: 10px 0 0 0;
    line-height: 100%;
}

.vform {
    margin: 15px 0 0 0;
}

.vlabel {
    font-size: 12px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #B4B4BD;
    line-height: 100%;
    text-transform: uppercase;
    margin: 15px 0 0 0;
}

.vinput {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    background-color: #0D0D10 !important;
    color: #ffffff;
    margin: 5px 0 0 0;
    border: 1px solid #2A2A31;
    border-radius: 10px;
}

.show-password {
    font-size: 12px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #F2555E;
    cursor: pointer;
}

.vinput:deep(.v-input--indent-details .v-input__details) {
    padding: 0;
}

.vinput:deep(.v-input__control) {
    height: 44px;
}

.vinput:deep(.v-field) {
    border-radius: 8px;
}

.vinput:deep(.v-field__outline) {
    color: #1F1F24;
    --v-field-border-width: 1px;
}

.vinput:deep(.v-field--focused .v-field__outline) {
    color: #1F1F24;
    --v-field-border-width: 1px;
}

.vinput:deep(.v-field__input) {
    padding: 0;
    min-height: auto;
    height: 44px;
    outline: none;
}

.vinput:deep(.v-field__field) {
    padding: 0 10px;
}

.vsubmit {
    font-size: 15px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    background-color: #F2555E;
    color: #17070A;
    height: 46px;
    border-radius: 900px;
    text-transform: none;
    letter-spacing: normal;
    box-shadow: 0 0 4px 2px #F2555E66 !important;
}

.options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0 0 0;
}

.options:deep(.v-selection-control) {
    min-height: auto !important;
}

.vcheck {
    font-size: 13px;
}

.vcheck:deep(.v-selection-control .v-label) {
    font-size: 13px !important;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
}

.vcheck:deep(.v-selection-control__input) {
    justify-content: start;
    width: initial;
    margin-right: 10px;
}

.vcheck:deep(.v-selection-control__wrapper) {
    width: initial;
}

.terms-highlight {
    font-weight: 600;
    color: #FF8A91;
    cursor: pointer;
}

.forgot-pass {
    font-size: 13px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #FF8A91;
    margin: 10px 0 0 0;
    cursor: pointer;
}

.or-continue {
    font-size: 11px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #76767F;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 0 0;
    white-space: nowrap;
}

.or-continue span {
    margin: 0 10px;
}

.or-continue .line {
    background-color: #24242B;
    width: 100%;
    height: 2px;
}

.alternative-login {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 0 0 0;
}

.alternative-login .btn {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    text-transform: none;
    border: 1px solid #1F1F24;
    color: #E8E8EE;
    background-color: #0D0D10;
    flex: 1;
    border-radius: 10px;
}

.create-account {
    font-size: 13px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #9A9AA4;
    margin: 20px 0 0 0;
    display: block;
}

.create-account span {
    font-weight: 600;
    color: #FF8A91;
}
</style>