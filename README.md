# Calculus for Life Sciences II — MATH 7B Notes

Course notes for MATH 007B (Calculus for Life Sciences II), written in [PreTeXt](https://pretextbook.org/).

**Hosted at: https://thomasmbury.github.io/math7b-notes/**

Licensed under [CC BY 4.0](LICENSE).

## Structure

The source lives in `source/`, starting from `source/main.ptx`, which includes the chapters:

- Antiderivatives
- Definite Integrals
- The Fundamental Theorem of Calculus
- Applications of Integration
- Integration Techniques
- Trigonometric Integration
- Differential Equations

## Building

Install dependencies:

```bash
pip install -r requirements.txt
```

Build the web version:

```bash
pretext build web
```

Preview it locally:

```bash
pretext view web
```

Build a PDF:

```bash
pretext build print
```

## Deployment

Pushing to `main` automatically builds and deploys the web version to GitHub Pages via [`.github/workflows/pretext-deploy.yml`](.github/workflows/pretext-deploy.yml). To trigger a deploy manually instead:

```bash
pretext deploy
```

## Notes

Build output (`output/`), the PreTeXt cache (`.cache/`), and build logs (`logs/`) are git-ignored since they're regenerated from `source/`.
