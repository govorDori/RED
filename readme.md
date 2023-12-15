# Git verziókezelés

## Helyi repo létrehozása

- A helyi repo inicializálása:
    > git init
- Ellenőrzés:
    > git status
- Előkészítjük a kommitolásra (stage)
    > git add .
- Ellenőrzés:
    > git status
- username, email ellenőrzése:
    > git config user.name

    > git config user.email
- Létrehozzuk a legújabb verziót, eltároljuk a helyi repoba:
    > git commit -m "first commit"
- Ellenőrzés:
    > git status

## Összekapcsolás a távoli repoval

- Új GitHub repo létrehozása (public)
- Összekapcsolási parancs:
    > git remote add origin https://mytoken@github.com/govorDori/**repoName**.git
- Az első alkalommal meg kell mondani az ágat, hová kerüljön:
    > git push -u origin master
- Kérni fogja a tokent, private repoból ki kell másolni