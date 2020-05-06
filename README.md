### Instalação
Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

Para conseguir utilizar esta aplicação, você precisará ter instalado em sua máquina, os requisitos abaixo:

| Plugin | README |
| ------ | ------ |
| Git | https://git-scm.com/downloads |
| Docker | https://docs.docker.com/install |
| Docker Compose | https://docs.docker.com/compose/install |

Após instalado os requisitos, baixe este repositório:
```sh
$ git clone https://gitlab.com/folder
$ cd folder
```

Para subir a aplicação, utilize o comando:
```sh
$ docker-compose up -d 
```

Verifique se o container do mysql está disponível:
```sh
$ docker-compose logs mysql
```

### Acessos
| Nome | URL | Dados|
| ------ | ------ |------ |
| Aplicação | http://0.0.0.0:8080 | |
| MySQL | http://0.0.0.0:3306 | user:root senha:root |

### Commandos Úteis
Comandos docker mais utilizados:
```sh
$ docker stop $(docker ps -a -q)
$ docker rm $(docker ps -a -q)
$ docker volume rm $(docker volume ls -q)
```
