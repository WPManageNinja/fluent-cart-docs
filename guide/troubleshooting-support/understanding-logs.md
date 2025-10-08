 # Understanding Logs

Think of the **Logs** screen as the diary for your store. It keeps a detailed record of every important event and action that happens, like when an order is paid or a setting is updated. This is an essential tool for keeping an eye on your store's operations and for figuring out what happened if something ever goes wrong.

## Accessing the Logs

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Logs** in the left sidebar.
2.  This will open the **Logs** screen, displaying a detailed table of all recorded events.

## Understanding the Logs List Table


The Logs list table presents key information for each event entry:

* **ID:** A unique identification number for each log entry.
* **Date & Title:** The date and time when the event occurred, along along with a brief title describing the action.
* **Content:** A detailed description of the event that took place.
* **Status:** The outcome or severity of the action.
* **Module:** The FluentCart module or area from which the action originated.
* **Actions:** For many log entries, particularly those related to orders, a **"View Order"** link is provided. Clicking this link will navigate you directly to the [Order Details screen](/guide/store-management/orders-management/order-details-overview) for that specific transaction.

    ![Screenshot of Logs List Page](/images/troubleshooting-support/understanding-logs/Logs.webp)

## Filtering Logs

If you are looking for a specific event, you can easily filter the log entries to narrow down your search.

### Filtering by Status Tabs

At the top of the logs screen, you will find several tabs to filter by the most common statuses:

* **All:** Displays every log entry.
* **Success:** Shows only successfully completed actions.
* **Warning:** Filters for entries that indicate a minor issue.
* **Error:** Shows only entries that are reporting an error.

### Using 'More Views'

For more specific filters, click the **More views** dropdown menu. Here you will find these options:

* **Failed:** Shows only actions that resulted in a failure.
* **Info:** Displays informational messages that aren't errors or successes.
* **API Only:** Narrows the list to only show events related to API interactions.

## Using Logs for Troubleshooting

* **Diagnosing Errors:** If you encounter unexpected behavior or errors in your store, checking the "Failed" or "Warning" log types can help identify the root cause.
* **Auditing Changes:** The "Success" logs keep a record of all successful actions. This is helpful for audits or seeing who did what and when.
* **Tracking Workflows:** By reviewing the sequence of events in the log, you can understand how certain processes (like order fulfillment or refunds) unfolded.

