# Code Snippets

Here you'll find ready-to-use code snippets for FluentCart. These snippets help you customize and extend your store's functionality. Simply copy the code and add it to your theme's `functions.php` file or use a code snippets plugin.

## Hide Unnecessary Decimals

By default, FluentCart displays prices with decimal places (e.g., $10.00). If you prefer cleaner pricing without unnecessary decimals (e.g., $10 instead of $10.00), use this snippet.

<GistEmbed id="377042dacea4f547fe606210cadc971e" />

This filter removes trailing zeros from prices, so `$10.00` becomes `$10` while `$10.50` stays as `$10.50`.
