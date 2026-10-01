# Custom JavaScript Greeting Action

Cette action lit les entrées `username` et `greeting`, écrit la salutation dans les logs, puis la renvoie dans la sortie `message`.

## Utilisation

```yaml
- name: Create greeting
  id: greeting
  uses: ./my-custom-action-js
  with:
    username: Ada
    greeting: Bonjour

- name: Print greeting output
  run: echo "${{ steps.greeting.outputs.message }}"
```

Le dépôt doit être récupéré avec `actions/checkout` avant d’utiliser le chemin local. L’action nécessite Node.js 20 ou une version ultérieure et n’a pas de dépendance externe.

## Entrées

| Nom | Obligatoire | Description |
| --- | --- | --- |
| `username` | Oui | Nom de la personne à saluer. |
| `greeting` | Oui | Formule de salutation. |

## Sortie

| Nom | Description |
| --- | --- |
| `message` | Salutation générée, au format `<greeting>, <username>!`. |
