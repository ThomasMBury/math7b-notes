# Calculus for Life Sciences II — MATH 7B Notes

Course notes for MATH 007B (Calculus for Life Sciences II), written in [PreTeXt](https://pretextbook.org/).

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

Deploy the web version to GitHub Pages:

```bash
pretext deploy
```

Build output (`output/`), the PreTeXt cache (`.cache/`), and build logs (`logs/`) are git-ignored since they're regenerated from `source/`.
