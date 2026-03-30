import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selling Your Home in 2026? A Tax Planning Checklist",
  description:
    "A step-by-step tax planning checklist for homeowners selling in 2026, covering cost basis, capital gains, and the Section 121 exclusion.",
};

export default function SellingYourHomeTaxGuidePost() {
  return (
    <BlogPostLayout
      title="Selling Your Home in 2026? A Tax Planning Checklist"
      description="A step-by-step tax planning checklist for homeowners selling in 2026, covering cost basis, capital gains, and the Section 121 exclusion."
      date="June 17, 2025"
    >
      <p>
        Selling a home is one of the largest financial transactions most people
        will ever make. It is also one of the most misunderstood from a tax
        perspective. Many homeowners assume the{" "}
        <Link href="/blog/section-121-exclusion-guide/">
          Section 121 exclusion
        </Link>{" "}
        will eliminate their entire tax bill, only to discover at filing time
        that they owe more than expected. Others leave money on the table by
        failing to account for closing costs, improvements, and selling
        expenses that would have reduced their taxable gain.
      </p>

      <p>
        If you are planning to sell your home in 2026, the time to start tax
        planning is now, not after the closing. This checklist walks you through
        the five steps every seller should take, the most common mistakes to
        avoid, and how to make sure your CPA has everything they need.
      </p>

      <h2>Step 1: Calculate Your Adjusted Cost Basis</h2>

      <p>
        Your adjusted cost basis is the foundation of every capital gains
        calculation. It represents your total investment in the property for tax
        purposes. The formula is:
      </p>

      <p>
        <strong>
          Adjusted Basis = Purchase Price + Qualifying Closing Costs + Capital
          Improvements &minus; Depreciation &minus; Casualty Loss Deductions
        </strong>
      </p>

      <p>Start by gathering three numbers:</p>

      <ol>
        <li>
          <strong>Purchase price</strong> &mdash; The amount you paid for the
          home as stated on your original purchase contract or deed.
        </li>
        <li>
          <strong>Qualifying closing costs</strong> &mdash; Title insurance,
          attorney fees, recording fees, transfer taxes, survey fees, and
          similar costs directly tied to the purchase. See our{" "}
          <Link href="/blog/closing-costs-and-cost-basis/">
            closing costs guide
          </Link>{" "}
          for a complete list of what qualifies.
        </li>
        <li>
          <strong>Capital improvements</strong> &mdash; Any project that added
          value, extended the useful life, or adapted the property to a new use.
          This includes kitchen renovations, roof replacements, bathroom
          remodels, new HVAC systems, additions, and much more. Routine repairs
          and maintenance do not count. For a detailed breakdown of the
          difference, read our{" "}
          <Link href="/blog/capital-improvement-vs-repair/">
            capital improvement vs. repair guide
          </Link>.
        </li>
      </ol>

      <p>
        If you claimed depreciation on part of the home, for example because you
        used a room as a home office or rented out a portion, you must subtract
        the depreciation allowed or allowable from your basis. Similarly, if you
        claimed a casualty loss deduction after a natural disaster, that amount
        reduces your basis.
      </p>

      <p>
        For most primary-residence homeowners who never rented out the property,
        the calculation simplifies to purchase price plus closing costs plus
        improvements. Take the time to be thorough. Every dollar you add to your
        basis is a dollar that is not taxed as a capital gain.
      </p>

      <h2>Step 2: Estimate Your Capital Gain</h2>

      <p>
        Once you have your adjusted basis, estimating your gain is
        straightforward:
      </p>

      <p>
        <strong>
          Capital Gain = Sale Price &minus; Adjusted Basis &minus; Selling Costs
        </strong>
      </p>

      <p>
        Selling costs, also called selling expenses, are amounts you pay to
        close the sale. These are subtracted from the sale price, not added to
        basis, but the effect on your gain is the same. Common selling costs
        include:
      </p>

      <ul>
        <li>
          <strong>Real estate agent commissions</strong> &mdash; Typically the
          largest selling expense, often 5% to 6% of the sale price (though
          rates have become more negotiable in recent years).
        </li>
        <li>
          <strong>Seller-paid transfer taxes</strong> &mdash; State or local
          taxes on the transfer of the property.
        </li>
        <li>
          <strong>Title insurance for the buyer</strong> &mdash; In some markets,
          the seller customarily pays for the buyer&apos;s title policy.
        </li>
        <li>
          <strong>Attorney fees</strong> &mdash; Legal fees related to the sale
          transaction.
        </li>
        <li>
          <strong>Staging and marketing costs</strong> &mdash; Professional
          staging, photography, and advertising costs paid to sell the home.
        </li>
        <li>
          <strong>Escrow and closing fees</strong> &mdash; Settlement agent
          charges on the seller&apos;s side.
        </li>
      </ul>

      <p>
        Here is a quick example. You purchased your home for $400,000 with
        $8,200 in qualifying closing costs and made $45,000 in capital
        improvements over the years. Your adjusted basis is $453,200. You sell
        for $750,000 with $42,000 in selling costs (commissions, transfer taxes,
        etc.). Your estimated capital gain is:
      </p>

      <p>
        <strong>$750,000 &minus; $453,200 &minus; $42,000 = $254,800</strong>
      </p>

      <h2>Step 3: Apply the Section 121 Exclusion</h2>

      <p>
        The{" "}
        <Link href="/blog/section-121-exclusion-guide/">
          Section 121 exclusion
        </Link>{" "}
        lets you exclude up to $250,000 in capital gains ($500,000 for married
        couples filing jointly) when you sell your primary residence. To
        qualify, you must have owned and lived in the home as your primary
        residence for at least two of the five years before the sale.
      </p>

      <p>
        Using the example above, a single filer with a $254,800 gain would owe
        tax on only $4,800 after applying the $250,000 exclusion. A married
        couple filing jointly would owe nothing, as the $500,000 exclusion
        covers the entire gain.
      </p>

      <p>
        There are important nuances to the exclusion that can trip up sellers:
      </p>

      <ul>
        <li>
          The two-year ownership and use tests do not need to be consecutive.
          You can meet them with any 24 months of ownership and any 24 months
          of use during the five-year lookback period.
        </li>
        <li>
          You can generally only use the exclusion once every two years. If you
          used it on a previous home sale within the past two years, you may
          not be eligible.
        </li>
        <li>
          Partial exclusions are available in certain circumstances, such as a
          job relocation, health reasons, or unforeseen events, even if you do
          not meet the full two-year requirements.
        </li>
        <li>
          If you rented out the home or used it as a vacation property for part
          of the ownership period, the post-2008 &quot;non-qualified use&quot;
          rules may reduce your exclusion proportionally.
        </li>
      </ul>

      <p>
        Read our{" "}
        <Link href="/blog/section-121-exclusion-guide/">
          complete Section 121 guide
        </Link>{" "}
        for a deeper dive into eligibility, partial exclusions, and special
        situations.
      </p>

      <h2>Step 4: Know Your Tax Rate</h2>

      <p>
        Any gain above the exclusion amount is taxed as a long-term capital
        gain, assuming you owned the home for more than one year. The federal
        long-term capital gains tax rates for 2026 are:
      </p>

      <table>
        <thead>
          <tr>
            <th>Tax Rate</th>
            <th>Single Filer Taxable Income</th>
            <th>Married Filing Jointly</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0%</td>
            <td>Up to ~$48,350</td>
            <td>Up to ~$96,700</td>
          </tr>
          <tr>
            <td>15%</td>
            <td>~$48,351 to ~$533,400</td>
            <td>~$96,701 to ~$600,050</td>
          </tr>
          <tr>
            <td>20%</td>
            <td>Over ~$533,400</td>
            <td>Over ~$600,050</td>
          </tr>
        </tbody>
      </table>

      <p>
        These thresholds are based on total taxable income, not just the home
        sale gain. If the sale pushes your income into a higher bracket, part of
        the gain may be taxed at the higher rate.
      </p>

      <p>
        In addition, high-income taxpayers may owe the{" "}
        <strong>Net Investment Income Tax (NIIT)</strong>, a 3.8% surtax on
        investment income that applies when your modified adjusted gross income
        exceeds $200,000 (single) or $250,000 (married filing jointly). The
        NIIT applies to the lesser of your net investment income or the amount
        by which your MAGI exceeds the threshold. A large home sale gain can
        easily trigger this surtax, adding 3.8 percentage points to your
        effective rate.
      </p>

      <p>
        Do not forget state taxes. Most states tax capital gains as ordinary
        income, and rates vary widely. California, for example, taxes capital
        gains at rates up to 13.3%, while states like Texas, Florida, and
        Nevada have no state income tax at all. Factor your state into the
        calculation for a complete picture.
      </p>

      <h2>Step 5: Gather Your Documentation</h2>

      <p>
        When you file your tax return for the year of the sale, your CPA or tax
        preparer will need the following:
      </p>

      <ul>
        <li>
          <strong>Original Closing Disclosure or HUD-1</strong> &mdash; Shows
          your purchase price and closing costs.
        </li>
        <li>
          <strong>Records of capital improvements</strong> &mdash; Receipts,
          invoices, contractor agreements, and canceled checks for every
          improvement you are claiming. Include a description, date, and cost
          for each project.
        </li>
        <li>
          <strong>Sale Closing Disclosure</strong> &mdash; Shows the sale price,
          commissions, transfer taxes, and other selling costs.
        </li>
        <li>
          <strong>Form 1099-S</strong> &mdash; The closing agent may issue this
          form reporting the sale proceeds to you and the IRS.
        </li>
        <li>
          <strong>Proof of residency</strong> &mdash; Utility bills, voter
          registration, driver&apos;s license, or other documents confirming you
          used the home as your primary residence during the required period.
        </li>
        <li>
          <strong>Prior depreciation records</strong> &mdash; If you ever
          claimed depreciation (home office, rental use), provide the amounts
          and years.
        </li>
      </ul>

      <p>
        The more organized your records, the faster and cheaper your tax
        preparation will be. Missing documentation can lead to estimated
        figures, which are less defensible if the IRS ever questions your
        return.
      </p>

      <h2>Common Mistakes That Cost Sellers Money</h2>

      <p>
        After walking through the five steps, here are the pitfalls we see most
        often:
      </p>

      <ul>
        <li>
          <strong>Forgetting closing costs from the original purchase</strong>{" "}
          &mdash; Many homeowners only look at their purchase price and
          completely overlook the qualifying closing costs that should have been
          added to their basis. Over a long ownership period, this can mean
          thousands in unnecessary tax. See our{" "}
          <Link href="/blog/closing-costs-and-cost-basis/">
            closing costs guide
          </Link>{" "}
          for details.
        </li>
        <li>
          <strong>Misclassifying repairs as improvements</strong> &mdash;
          Painting a room, fixing a leaky faucet, or replacing a broken window
          pane are repairs. They do not add to your basis. On the other hand,
          replacing all the windows in the house, repainting the entire
          exterior, or fixing foundation damage are improvements. The{" "}
          <Link href="/blog/capital-improvement-vs-repair/">
            improvement vs. repair distinction
          </Link>{" "}
          matters enormously.
        </li>
        <li>
          <strong>Not tracking older improvements</strong> &mdash; A kitchen
          remodel from 12 years ago counts just as much as one from last year.
          If you did not keep receipts, you may still be able to reconstruct
          records through bank statements, contractor records, or permit
          filings. Read our guide on{" "}
          <Link href="/blog/track-home-improvements-for-taxes/">
            tracking home improvements for taxes
          </Link>{" "}
          for tips on recovering lost records.
        </li>
        <li>
          <strong>Assuming the exclusion covers everything</strong> &mdash; With
          home values appreciating rapidly in many markets, it is increasingly
          common for gains to exceed the $250,000 or $500,000 exclusion. Even
          if you expect to be under the limit, run the numbers. A surprise
          taxable gain discovered at filing time leaves you with no time to
          plan.
        </li>
        <li>
          <strong>Ignoring the NIIT</strong> &mdash; Sellers often calculate
          their capital gains tax rate correctly but forget about the 3.8% Net
          Investment Income Tax. On a $100,000 taxable gain, that is an extra
          $3,800.
        </li>
        <li>
          <strong>Selling too soon</strong> &mdash; If you are close to meeting
          the two-year ownership and use test, waiting a few extra months could
          save you tens of thousands of dollars. Run the numbers before setting
          your listing date.
        </li>
      </ul>

      <h2>How HomeBasis Helps You Prepare</h2>

      <p>
        HomeBasis is designed to make every step of this checklist easier. When
        you set up your home, the app captures your purchase price and qualifying
        closing costs to establish your starting basis. As you log{" "}
        <Link href="/blog/track-home-improvements-for-taxes/">
          capital improvements
        </Link>{" "}
        over the years, your adjusted basis updates automatically. The app
        classifies each project and stores your receipts and documentation in
        one place.
      </p>

      <p>
        When it comes time to sell, the Export Hub generates a CPA-ready report
        that includes your complete basis calculation, an itemized list of every
        improvement with dates and costs, and the documentation trail your tax
        preparer needs. Instead of spending hours hunting for old receipts and
        building a spreadsheet from scratch, you hand your CPA a clean,
        organized package.
      </p>

      <p>
        Whether your sale is six months away or six years away, the best time
        to start tracking is now. The earlier you begin, the more complete and
        accurate your records will be when it matters most.
      </p>

      <p>
        For a foundational understanding of how cost basis works, start with
        our{" "}
        <Link href="/blog/home-cost-basis-explained/">
          complete guide to home cost basis
        </Link>.
      </p>
    </BlogPostLayout>
  );
}
