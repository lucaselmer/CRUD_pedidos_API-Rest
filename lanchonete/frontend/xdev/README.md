# FRONTEND

## SE - Criar um novo projeto Web com Vue
```
vue create NOME_DO_PROJETO
[x] - Selecionar "Manually select features" e dar enter
[x] - Marcar "Router" com barra de espaço e dar enter
[x] - Selecionar "2.x"
[x] - Selecionar "ESLint with error prevention only" e dar enter
[x] - Selecionar "Lint on save" e dar enter
[x] - Selecionar "In package.json" e dar enter
[x] - N para a última pergunta e enter
cd NOME_DO_PROJETO
vue add vuetify
[x] - Selecionar "Default"
npm install jwt-decode --save
npm install axios --save
```

## SE - For clonar (outra pessoa criou o projeto), executar
```
npm install
```

## Rodar o projeto em desenvolvimento
```
npm run serve
```

## Compilar o programa
```
Dentro de vue.config.js, acrescentar a linha:
publicPath: '/app/' - Modificar "app" para o caminho que desejam
npm run build
```

### Referências
[Referência das configurações](https://cli.vuejs.org/config/).