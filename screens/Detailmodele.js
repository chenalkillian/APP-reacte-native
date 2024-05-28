import React from 'react';
import { WebView } from 'react-native-webview';

const DetailModele = ({ route }) => {
    const { site } = route.params;
    
    return (
        <WebView
          source={{ uri: site }} // Utilisez simplement la valeur de site, pas besoin de la convertir en chaîne
          style={{ flex: 1 }} // Assurez-vous que le WebView occupe tout l'espace disponible
        />
      );
}

export default DetailModele;
