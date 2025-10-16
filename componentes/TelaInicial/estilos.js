import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030ff',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },

  imgfundo: {
    marginTop: 80,
    width: 80,
    borderRadius: 90,
    aspectRatio: 1, 
    resizeMode: 'cover',
    marginBottom: 10,
  },

  titulo: {
    color: '#32CD32',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  descricao: {
    color: '#ccc',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },

  card: {
  backgroundColor: '#107C10',
  borderRadius: 14,
  width: 300,
  padding: 12,
  marginBottom: 15,
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  overflow: 'hidden',
  height: 100,
},

cardImg: {
  width: 80,
  height: 80,
  marginRight: 12, 
},

cardTexto: {
  resizeMode: 'contain',
  width: 100,
  color: '#fff',
  fontSize: 20,
  fontWeight: '60',
  textAlign: 'left',
  
},
});

export default estilos;
