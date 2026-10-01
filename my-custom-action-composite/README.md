# Custom Composite Action

Cette action composite salue le prénom fourni, génère un nombre aléatoire et affiche également un message d'au revoir.

## Utilisation

```yaml
- name: Run custom action
  id: hello
  uses: ./my-custom-action-composite
  with:
    who-to-greet: Mona

- name: Print random number
  run: echo "${{ steps.hello.outputs.random-number }}"
```

## Entrées

| Nom | Obligatoire | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `who-to-greet` | Oui | `World` | Prénom à saluer. |

L'action affiche `Hello Mona.` puis `Goodbye, Mona!` dans les logs. La sortie `random-number` contient un entier entre `0` et `32767`.

## Sorties

| Nom | Description |
| --- | --- |
| `random-number` | Entier aléatoire généré pendant l'exécution. |
