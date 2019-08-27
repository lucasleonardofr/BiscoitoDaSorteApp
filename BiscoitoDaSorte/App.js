import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.style = StyleSheet.create({
      botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: props.cor,
        borderRadius: 25
      },
      btnArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      brnTexto: {
        fontSize: 18,
        fontWeight: "bold",
        color: props.cor
      }
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.style.botao} onPress={this.props.onPress}>
        <View style={this.style.btnArea}>
          <Text style={this.state.btnTexto}>{this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ""
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso."
    ];
  }

  quebrarBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';

    this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./src/biscoito.png")} style={styles.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <Botao
          cor="#dd7b22"
          nome="Abrir Biscoito"
          onPress={this.quebrarBiscoito}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    textAlign: "center",
    fontStyle: "italic"
  }
});
