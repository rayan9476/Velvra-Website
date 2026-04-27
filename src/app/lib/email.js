import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "r32284947@gmail.com",
    pass: "hoghohfyydzmpqce",
  },
});

// Sends an order confirmation email to the user with a stylish design logic start here
export async function sendOrderConfirmationEmail(userEmail, orderDetails) {
  const {
    orderId,
    orderNumber,
    totalPrice,
    tax,
    finalTotal,
    paymentMethod,
    items,
  } = orderDetails;

  const itemsList = items
    .map(
      (item) => `
  <tr>
    <td style="padding:14px 10px; border-bottom:1px solid #222; font-size:14px; color:#F5F5F0;">
      ${item.name}
    </td>
    <td style="padding:14px 10px; border-bottom:1px solid #222; font-size:14px; color:#888; text-align:center;">
      ${item.quantity}
    </td>
    <td style="padding:14px 10px; border-bottom:1px solid #222; font-size:14px; color:#C9A84C; text-align:right;">
      $${Number(item.price).toFixed(2)}
    </td>
  </tr>
`,
    )
    .join("");

  const mailOptions = {
    from: `Velvra <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `Velvra — Order #${orderId} Confirmed ✓`,
    html: `
    <div style="background:#0A0A0A; max-width:600px; margin:0 auto; font-family:'Georgia', serif;">
      
      <!-- Header -->
      <div style="background:#111; padding:30px 40px; text-align:center; border-bottom:1px solid #C9A84C;">
        <h1 style="color:#C9A84C; font-size:32px; letter-spacing:8px; margin:0;">VELVRA</h1>
        <p style="color:#666; font-size:12px; letter-spacing:3px; margin:8px 0 0;">ELEGANCE REDEFINED</p>
      </div>

      <!-- Body -->
      <div style="padding:40px;">

        <!-- Success Badge -->
        <div style="text-align:center; margin-bottom:30px;">
          <div style="display:inline-block; background:#1a1a1a; border:1px solid #C9A84C; border-radius:50%; width:60px; height:60px; line-height:60px; font-size:24px;">✓</div>
          <h2 style="color:#F5F5F0; font-size:22px; margin:15px 0 5px;">Order Confirmed</h2>
          <p style="color:#666; font-size:13px; margin:0;">We have received your order and are processing it now.</p>
        </div>

        <!-- Order ID -->
        <div style="background:#111; border-left:3px solid #C9A84C; padding:15px 20px; margin-bottom:30px;">
          <p style="color:#666; font-size:11px; letter-spacing:2px; margin:0 0 4px;">ORDER NUMBER</p>
          <p style="color:#C9A84C; font-size:18px; font-weight:bold; margin:0;">#${orderNumber}</p>
        </div>

        <!-- Order Items Table -->
        <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
          <thead>
            <tr style="border-bottom:1px solid #C9A84C;">
              <th style="padding:12px 10px; text-align:left; color:#666; font-size:11px; letter-spacing:2px; font-weight:normal;">PRODUCT</th>
              <th style="padding:12px 10px; text-align:center; color:#666; font-size:11px; letter-spacing:2px; font-weight:normal;">QTY</th>
              <th style="padding:12px 10px; text-align:right; color:#666; font-size:11px; letter-spacing:2px; font-weight:normal;">PRICE</th>

            </tr>
          </thead>
          <tbody>
            ${itemsList}
          </tbody>
        </table>

        <!-- Total -->
        <div style="border-bottom:1px solid #333; padding-top:15px; text-align:right;">
          <span style="color:#666; font-size:12px; letter-spacing:2px;">TOTAL AMOUNT</span>
          <span style="color:#C9A84C; font-size:22px; font-weight:bold; margin-left:15px;">$${totalPrice}</span>
        </div>

         <!-- Tax -->
        <div style="border-bottom:1px solid #333; padding-top:15px; text-align:right;">
          <span style="color:#666; font-size:12px; letter-spacing:2px;">TAX</span>
          <span style="color:#C9A84C; font-size:22px; font-weight:bold; margin-left:15px;">$${tax}</span>
        </div>

         <!-- Final Total -->
        <div style="border-bottom:1px solid #333; padding-top:15px; text-align:right;">
          <span style="color:#666; font-size:12px; letter-spacing:2px;">FINAL TOTAL</span>
          <span style="color:#C9A84C; font-size:22px; font-weight:bold; margin-left:15px;">$${finalTotal}</span>
        </div>

        <!-- Payment Method -->
        <div style="border-bottom:1px solid #333; padding-top:15px; text-align:right;">
          <span style="color:#666; font-size:12px; letter-spacing:2px;">PAYMENT METHOD</span>
          <span style="color:#C9A84C; font-size:22px; font-weight:bold; margin-left:15px;">${paymentMethod}</span>
        </div>

      </div>

      <!-- Footer -->
      <div style="background:#111; padding:20px 40px; text-align:center; border-top:1px solid #222;">
        <p style="color:#C9A84C; font-size:14px; letter-spacing:4px; margin:0 0 8px;">VELVRA</p>
        <p style="color:#444; font-size:11px; margin:0;">This is an automated confirmation email. Please do not reply.</p>
      </div>

    </div>
  `,
  };
  await transporter.sendMail(mailOptions);
}
// Sends an order confirmation email to the user with a stylish design logic ends here
