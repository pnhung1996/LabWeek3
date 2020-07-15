import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import StyleMain from './theme/StyleMain'

const Icon = ({urlFrom, urlTo}) => {
  return(
    <View style = {StyleMain.iconContainer}>
      <Image source = {urlFrom} style = {StyleMain.iconStyle}/>
      <Text style = {{alignSelf : 'center'}}>To</Text>
      <Image source = {urlTo} style = {StyleMain.iconStyle}/>
    </View>   
  )
}

const ConversionTypeButton = ({ from, to, fromCurrency, toCurrency, setFromCurrency, setToCurrency }) => {
  const backgroundColor = ((from == fromCurrency && to == toCurrency) ? 'lightblue' : null );
  const colorStyle = {backgroundColor};

  const urlFrom = from == 'USD' ? require('./assets/usa.png') : require('./assets/vna.png');
  const urlTo = to == 'USD' ? require('./assets/usa.png') : require('./assets/vna.png');
  return (
    <TouchableOpacity style={[StyleMain.selectButtonStyle, colorStyle]}
      onPress={() => { setFromCurrency(from); setToCurrency(to) }}>     
      <Icon urlFrom = {urlFrom} urlTo = {urlTo}/>
    </TouchableOpacity>
  );
};


export default function App() {
  const [currentCurrencyValue, setCurrentCurrencyValue] = useState(0.0);
  const [conversionCurrencyValue, setConversionCurrencyValue] = useState(0.0);
  const [fromCurrency, setFromCurrency] = useState('VND');
  const [toCurrency, setToCurrency] = useState('USD');

  const converCurrency = () => {
    let value;
    if (fromCurrency === 'VND' && toCurrency === 'USD') {
      value = currentCurrencyValue / 23000;
    } else if (fromCurrency === 'USD' && toCurrency === 'VND') {
      value = currentCurrencyValue * 23000;
    }
    setConversionCurrencyValue(value);
  };

  useEffect(converCurrency);

  return (
    <View style={StyleMain.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput style={StyleMain.inputStyle}
        onChangeText={text => { setCurrentCurrencyValue(parseFloat(text == "" ? "0" : text.replace(",", "."))) }}
        autoFocus={true}
        keyboardType='number-pad'
        selectionColor="red"
        placeholder="100,000,000 VND"
        textAlign='center'
        maxLength={15} />
      <ConversionTypeButton
        from='VND'
        to='USD'
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency} />
      <ConversionTypeButton
        from='USD'
        to='VND'
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency} />
      <Text>
        Current currency
      </Text>
      <Text style={StyleMain.textCurrencyStyle}>
        {currentCurrencyValue}
      </Text>
      <Text>
        Conversion currency
      </Text>
      <Text style={StyleMain.textCurrencyStyle} numberOfLines={1}>
        {conversionCurrencyValue}
      </Text>
    </View>
  );
}

