import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Which Closing Costs Count Toward Your Home's Cost Basis?",
  description:
    "Find out which closing costs you can add to your home's cost basis to reduce capital gains tax when you sell.",
};

export default function ClosingCostsAndCostBasisPost() {
  return (
    <BlogPostLayout
      title="Which Closing Costs Count Toward Your Home's Cost Basis?"
      description="Find out which closing costs you can add to your home's cost basis to reduce capital gains tax when you sell."
      date="April 6, 2026"
    >
      <p>
        When you buy a home, the purchase price is only the starting point for
        calculating your tax basis. The IRS allows you to add certain closing
        costs to that number, giving you a higher{" "}
        <Link href="/blog/home-cost-basis-explained/">adjusted cost basis</Link>{" "}
        from day one. A higher basis means a smaller taxable gain when you
        eventually sell, which can save you thousands of dollars in capital gains
        tax. Yet many homeowners overlook these costs entirely, either because
        they never realized the deduction existed or because they lost track of
        the paperwork years ago.
      </p>

      <p>
        Understanding which closing costs count, and which do not, is your first
        opportunity to reduce a future tax bill. Let&apos;s break it down.
      </p>

      <h2>Why Closing Costs Matter for Your Basis</h2>

      <p>
        Your home&apos;s cost basis is essentially what you paid for it in the
        eyes of the IRS. When you sell, the IRS calculates your capital gain as
        the sale price minus your adjusted basis minus allowable selling
        expenses. The higher your basis, the smaller the gain, and the less tax
        you owe.
      </p>

      <p>
        Closing costs are the very first adjustment you can make. Unlike home
        improvements, which accumulate over the years you own the property,
        closing costs are locked in at the moment of purchase. If you fail to
        include them, you start with a basis that is artificially low, and
        that gap compounds over every year of ownership. By the time you sell a
        decade or two later, the oversight could mean paying tax on thousands of
        dollars of phantom gain.
      </p>

      <p>
        The good news is that the rules are relatively straightforward once you
        know what to look for. The IRS draws a clear line between costs that are
        part of acquiring the property and costs that are related to financing or
        ongoing expenses.
      </p>

      <h2>Closing Costs That ARE Added to Your Basis</h2>

      <p>
        The IRS allows you to add closing costs that are directly related to
        purchasing and transferring the property. These are expenses you would
        have incurred whether you paid cash or took out a mortgage. Here is the
        list of the most common qualifying costs:
      </p>

      <ul>
        <li>
          <strong>Title insurance premiums</strong> &mdash; The owner&apos;s title
          insurance policy protects you against defects in the title. This
          premium is a cost of acquiring clear ownership and is added to your
          basis. Note that the lender&apos;s title insurance policy, which protects
          the bank, also qualifies because it is a required cost of completing
          the purchase.
        </li>
        <li>
          <strong>Attorney fees</strong> &mdash; Legal fees for reviewing the
          purchase contract, conducting the closing, or preparing deed documents
          are basis-eligible. If your attorney also handled mortgage-related
          work, only the portion attributable to the purchase itself qualifies.
        </li>
        <li>
          <strong>Recording fees</strong> &mdash; The fee charged by your local
          government to record the deed and mortgage in public records. This is
          a direct cost of transferring ownership.
        </li>
        <li>
          <strong>Transfer taxes</strong> &mdash; State or local taxes imposed on
          the transfer of real property. These may also be called documentary
          stamp taxes or conveyance taxes, depending on your state. Whether paid
          by the buyer, the seller, or split between both parties, the
          buyer&apos;s share is added to basis.
        </li>
        <li>
          <strong>Survey fees</strong> &mdash; If a survey was required as part
          of the purchase, the cost is added to your basis.
        </li>
        <li>
          <strong>Title search and examination fees</strong> &mdash; The cost of
          searching public records to verify the seller has clear title to the
          property.
        </li>
        <li>
          <strong>Escrow or settlement fees</strong> &mdash; The fee charged by
          the escrow or closing agent for managing the transaction and
          disbursing funds.
        </li>
        <li>
          <strong>Abstract of title fees</strong> &mdash; Charges for preparing
          or updating the abstract, a summary of the property&apos;s ownership
          history.
        </li>
      </ul>

      <p>
        The common thread is that each of these costs exists because you are
        buying a piece of real property. They would be incurred whether you
        financed the purchase or paid entirely in cash.
      </p>

      <h2>Closing Costs That Are NOT Added to Your Basis</h2>

      <p>
        Not every line item on your settlement statement qualifies. Costs
        related to obtaining a mortgage, prepaying ongoing expenses, or paying
        for insurance that protects the lender are excluded. Here are the most
        common items that do not increase your basis:
      </p>

      <ul>
        <li>
          <strong>Prepaid mortgage interest (per diem interest)</strong> &mdash;
          Interest charges covering the days between closing and the end of that
          month. This is a financing cost, not an acquisition cost. However, it
          may be deductible as mortgage interest on your tax return for that
          year.
        </li>
        <li>
          <strong>Homeowner&apos;s insurance premiums</strong> &mdash; The initial
          premium or escrow deposit for your homeowner&apos;s insurance policy is
          an ongoing operating expense, not part of the purchase price.
        </li>
        <li>
          <strong>Property tax escrow deposits</strong> &mdash; Funds deposited
          into escrow for future property tax payments. These are prepayments of
          an annual expense, not a purchase cost.
        </li>
        <li>
          <strong>Private mortgage insurance (PMI)</strong> &mdash; Premiums for
          PMI protect the lender, not you, and are a condition of the loan, not
          the purchase.
        </li>
        <li>
          <strong>Loan origination fees and discount points</strong> &mdash;
          These are costs of borrowing money, not costs of buying the property.
          Points may be deductible as mortgage interest in the year paid, but
          they do not add to basis.
        </li>
        <li>
          <strong>Credit report fees</strong> &mdash; A cost of the loan
          application process.
        </li>
        <li>
          <strong>Appraisal fees (when required by the lender)</strong> &mdash;
          If the appraisal was ordered by your lender as a condition of the
          mortgage, it is a financing cost. However, if you independently
          ordered an appraisal as part of your purchase decision, there is an
          argument it could be included. When in doubt, consult a tax
          professional.
        </li>
      </ul>

      <p>
        The key distinction: if a cost exists because of your mortgage, it does
        not add to basis. If it exists because of the purchase, it does.
      </p>

      <h2>How to Find Your Closing Costs</h2>

      <p>
        The document you need is your <strong>Closing Disclosure</strong>. If
        you purchased your home on or after October 3, 2015, you received a
        five-page Closing Disclosure form. For homes purchased before that date,
        the equivalent document is the <strong>HUD-1 Settlement Statement</strong>.
      </p>

      <p>
        Your closing agent, title company, or real estate attorney should have
        provided a copy at closing. If you cannot find it, try these options:
      </p>

      <ol>
        <li>
          <strong>Your lender</strong> &mdash; Mortgage servicers are required to
          keep copies of closing documents. Contact your current loan servicer
          and request a copy.
        </li>
        <li>
          <strong>Your title company or closing attorney</strong> &mdash; They
          typically retain records for several years.
        </li>
        <li>
          <strong>Your real estate agent</strong> &mdash; Agents often keep
          transaction files, sometimes digitally.
        </li>
        <li>
          <strong>Your email</strong> &mdash; Many modern closings involve
          digital document delivery. Search your inbox for terms like
          &quot;Closing Disclosure,&quot; &quot;settlement statement,&quot; or
          your title company&apos;s name.
        </li>
      </ol>

      <p>
        Once you have the document, go through it line by line. Page 2 of the
        Closing Disclosure, under &quot;Loan Costs&quot; and &quot;Other
        Costs,&quot; breaks down each charge. Separate the qualifying items from
        the non-qualifying ones using the lists above.
      </p>

      <h2>Example: Building Your Starting Basis</h2>

      <p>
        Suppose you purchased a home for $400,000. Your Closing Disclosure shows
        the following charges paid by the buyer:
      </p>

      <table>
        <thead>
          <tr>
            <th>Closing Cost Item</th>
            <th>Amount</th>
            <th>Added to Basis?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Owner&apos;s title insurance</td>
            <td>$2,100</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Lender&apos;s title insurance</td>
            <td>$850</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Attorney fees (purchase-related)</td>
            <td>$1,200</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Recording fees</td>
            <td>$250</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Transfer taxes</td>
            <td>$2,400</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Survey fee</td>
            <td>$500</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Title search</td>
            <td>$400</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Escrow/settlement fee</td>
            <td>$500</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Loan origination fee</td>
            <td>$4,000</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Prepaid interest</td>
            <td>$1,100</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Homeowner&apos;s insurance</td>
            <td>$1,500</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Property tax escrow</td>
            <td>$3,200</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <p>
        The qualifying closing costs total <strong>$8,200</strong>. Your
        starting adjusted cost basis is:
      </p>

      <p>
        <strong>$400,000 (purchase price) + $8,200 (qualifying closing costs) = $408,200</strong>
      </p>

      <p>
        That $8,200 increase in basis could save you over $1,200 in federal
        capital gains tax at the 15% rate. And this is before you add any{" "}
        <Link href="/blog/home-cost-basis-explained/">
          capital improvements
        </Link>{" "}
        made during ownership.
      </p>

      <h2>Don&apos;t Forget Seller-Paid Costs</h2>

      <p>
        In some transactions, the seller pays closing costs on behalf of the
        buyer as part of the negotiation. If the seller paid costs that would
        normally be the buyer&apos;s responsibility, such as transfer taxes or
        title insurance, those amounts typically reduce the effective purchase
        price rather than adding to basis. The net result is similar, but the
        accounting matters. Review your Closing Disclosure carefully to see who
        paid what.
      </p>

      <h2>How HomeBasis Helps You Capture Closing Costs</h2>

      <p>
        When you set up your home in HomeBasis, the onboarding wizard walks you
        through the most common closing costs line by line. Instead of trying to
        remember IRS rules on your own, you simply enter the amounts from your
        Closing Disclosure and the app categorizes them for you. Qualifying
        costs are automatically added to your starting basis, while
        non-qualifying costs are excluded.
      </p>

      <p>
        This means your cost basis is accurate from the very first day you start
        tracking. As you add{" "}
        <Link href="/blog/home-cost-basis-explained/">
          capital improvements
        </Link>{" "}
        over the years, each one builds on a foundation that already includes
        your closing costs. When it comes time to sell and apply the{" "}
        <Link href="/blog/section-121-exclusion-guide/">
          Section 121 exclusion
        </Link>, you will have a complete, well-documented basis calculation
        ready for your CPA.
      </p>

      <p>
        The two minutes you spend entering closing costs today could prevent a
        very expensive oversight a decade from now.
      </p>
    </BlogPostLayout>
  );
}
