<template>
  <v-container>
    <template>
      <v-row justify="center">
        <v-dialog
            v-model="dialog"
            max-width="790">
          <v-card>
            <v-card-text>
              <v-tabs color="#3C484C" class="pt-5">
                <v-tab class=" pl-0 pr-0 ml-5 mr-5" :key="1">Deposit</v-tab>
                <v-tab class=" pl-0 pr-0 ml-5 mr-5" :key="2">Withdraw</v-tab>
                <v-tab class=" pl-0 pr-0 ml-5 mr-5" :key="3">Rebalance</v-tab>

                <v-spacer></v-spacer>
                <v-icon @click="dialog = false" class="close">close</v-icon>

                <v-tab-item :key="1">
                  <v-card flat>
                    <v-card-text>
                      <v-container>
                        <v-row class="d-flex flex-column justify-center align-center">
                          <v-col cols="7" md="6" lg="6">
                            <v-select
                                class="mb-5"
                                append-icon="expand_more"
                                flat
                                solo-inverted
                                hide-details
                                :items="items"
                                filled
                                label="Choose exchange">
                            </v-select>
                            <v-select
                                class="mb-9"
                                append-icon="expand_more"
                                flat
                                solo-inverted
                                hide-details
                                :items="items"
                                filled
                                label="Choose currency">
                            </v-select>
                            <div class="d-flex align-center justify-center mb-7">
                              <v-img
                                  max-width="119px"
                                  src="https://i.stack.imgur.com/AXbcG.gif">
                              </v-img>
                            </div>
                            <p class="text-center mb-7">FGBfvcnkfdnvkk74365832ybvcvdfvfvb</p>
                            <v-btn
                                depressed
                                large
                                block
                                color="primary"
                                class="text-capitalize font-weight-bold">Copy</v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="2">
                  <v-card flat>
                    <v-card-text>
                      <v-container>
                        <v-row class="d-flex flex-column justify-center align-center">
                          <v-col cols="7" md="6" lg="6">
                            <v-select
                                class="mb-5"
                                append-icon="expand_more"
                                flat
                                solo-inverted
                                hide-details
                                :items="items"
                                filled
                                label="Choose exchange">
                            </v-select>
                            <v-select
                                class="mb-5"
                                append-icon="expand_more"
                                flat
                                solo-inverted
                                hide-details
                                :items="items"
                                filled
                                label="Choose currency">
                            </v-select>
                            <v-text-field
                                class="mb-5"
                                flat
                                solo-inverted
                                hide-details
                                filled
                                label="Withdraw amount"
                                suffix="Max">
                            </v-text-field>
                            <v-btn
                                depressed
                                large
                                block
                                color="primary"
                                class="text-capitalize font-weight-bold">Withdraw</v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="3">
                  <v-card flat>
                    <v-card-text>
                      <v-container>
                        <v-row class="d-flex flex-column justify-center align-center">
                          <v-col cols="7" md="6" lg="6">
                            <p>From</p>
                            <v-select
                                class="mb-5"
                                append-icon="expand_more"
                                flat
                                solo-inverted
                                hide-details
                                :items="items"
                                filled
                                label="Choose exchange">
                            </v-select>
                            <p>To</p>
                            <v-select
                                class="mb-5"
                                append-icon="expand_more"
                                flat
                                solo-inverted
                                hide-details
                                :items="items"
                                filled
                                label="Choose exchange">
                            </v-select>
                            <v-select
                                class="mb-5"
                                append-icon="expand_more"
                                flat
                                solo-inverted
                                hide-details
                                :items="items"
                                filled
                                label="Choose currency">
                            </v-select>
                            <template>
                              <v-autocomplete
                                  flat
                                  solo-inverted
                                  hide-details
                                  filled
                                  :items="['Foo']">
                                <template v-slot:append-item>
                                  <v-col class="text-center d-flex" cols="12" sm="12">
                                    <v-btn
                                        depressed
                                        class="pl-3 pr-3 text-capitalize primary--text"
                                        color="balance">
                                      Balance: <span class="font-weight-bold">0.04763864</span>
                                    </v-btn>
                                  </v-col>
                                  <v-col class="text-center d-flex" cols="12" sm="12">
                                    <div class="mr-3">
                                      <v-btn
                                          small
                                          depressed
                                          class="pl-0 pr-0 font-weight-bold white--text"
                                          color="alpha">
                                        10%
                                      </v-btn>
                                    </div>
                                    <div class="mr-3">
                                      <v-btn
                                          small
                                          depressed
                                          class="pl-0 pr-0 font-weight-bold white--text"
                                          color="alpha">
                                        25%
                                      </v-btn>
                                    </div>
                                    <div class="mr-3">
                                      <v-btn
                                          small
                                          depressed
                                          class="pl-0 pr-0 font-weight-bold white--text"
                                          color="alpha">
                                        100%
                                      </v-btn>
                                    </div>
                                    <div class="mr-3">
                                      <v-btn
                                          small
                                          depressed
                                          class="pl-0 pr-0 text-capitalize font-weight-bold white--text"
                                          color="alpha">
                                        Split
                                      </v-btn>
                                    </div>
                                  </v-col>
                                </template>
                              </v-autocomplete>
                            </template>


                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>

            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: true,
        items: ['Foo', 'Bar', 'Fizz', 'Buzz']
      }
    },
  }
</script>

<style>
  .v-tab.v-tab {
    min-width: auto;
  }

  .v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__suffix {
    background-color: #C4C4C4;
    width: 54px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 5px;
    border-radius: 5px;
    font-size: 12px;
    color: #ffffff;
    font-style: normal;
    font-weight: bold;
    font-family: Open Sans;
  }

  .v-tabs-slider-wrapper {
    height: 4px !important;
  }

  .theme--light.v-tabs .v-tab:hover:before {
    opacity: 0 !important;
  }

  .theme--light.v-text-field--solo-inverted>.v-input__control>.v-input__slot {
    border: 1px solid transparent !important;
  }

  .theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input {
    color: #3C484C !important;
  }

  .theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot {
    background-color: #F0F0F0 !important;
    border: 1px solid #54B2C8 !important;
    color: #3C484C !important;
  }

  .theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label {
      color: transparent !important;
  }

</style>
