# Custom Docker Message Action

Cette action Docker lit l'entrée `message`, l'affiche dans les logs d'exécution et la publie dans la sortie `output-message` pour les étapes suivantes du workflow.

## Utilisation

```yaml
- name: Afficher un message
  id: message
  uses: ./my-custom-action-docker
  with:
    message: "Bonjour depuis une action Docker"

- name: Utiliser la sortie
  run: echo "${{ steps.message.outputs.output-message }}"
```

Le dépôt doit être récupéré avant d'utiliser cette action locale. Docker et un runner GitHub Actions compatible avec les actions Docker sont nécessaires.

## Entrée

| Nom | Obligatoire | Description |
| --- | --- | --- |
| `message` | Oui | Texte à afficher et à publier en sortie. |

## Sortie

| Nom | Description |
| --- | --- |
| `output-message` | Valeur de l'entrée `message`. |
