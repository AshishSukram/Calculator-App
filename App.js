import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleCalculation = (operation) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || (operation !== 'sqrt' && isNaN(num2))) {
      setError('Please enter valid numbers.');
      setResult('');
      return;
    }

    setError('');
    let res;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          setError('Cannot divide by zero.');
          setResult('');
          return;
        }
        res = num1 / num2;
        break;
      case 'power':
        res = Math.pow(num1, num2);
        break;
      case 'sqrt':
        if (num1 < 0) {
          setError('Cannot take the square root of a negative number.');
          setResult('');
          return;
        }
        res = Math.sqrt(num1);
        break;
      default:
        res = '';
    }
    setResult(res.toString());
  };

  const handleClear = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        value={number1}
        onChangeText={(text) => setNumber1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        value={number2}
        onChangeText={(text) => setNumber2(text)}
        keyboardType="numeric"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCalculation('add')}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCalculation('subtract')}
        >
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCalculation('multiply')}
        >
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCalculation('divide')}
        >
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCalculation('power')}
        >
          <Text style={styles.buttonText}>Power</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCalculation('sqrt')}
        >
          <Text style={styles.buttonText}>Square Root</Text>
        </TouchableOpacity>
      </View>
      {result ? (
        <Text style={styles.resultText}>Result: {result}</Text>
      ) : null}
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    backgroundColor: '#0540F2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  resultText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  clearButton: {
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  clearButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default App;

