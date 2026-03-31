import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Home Cost Basis? A Homeowner's Guide",
  description:
    "Learn what cost basis means for your home, how to calculate your adjusted basis, and why tracking it can save you thousands in capital gains tax.",
};

export default function HomeCostBasisExplained() {
  return (
    <BlogPostLayout
      title="What Is Home Cost Basis? A Homeowner's Guide"
      description="Learn what cost basis means for your home, how to calculate your adjusted basis, and why tracking it can save you thousands in capital gains tax."
      date="March 30, 2026"
    >
      <p>
        If you own a home, there is a number the IRS cares about that most
        homeowners never think about until the day they sell: your home&apos;s{" "}
        <strong>cost basis</strong>. It is, quite simply, the IRS&apos;s way of
        measuring what you have &quot;invested&quot; in your property over the
        years. The higher your cost basis, the smaller your taxable gain when you
        sell, and the less you owe in capital gains tax.
      </p>
      <p>
        The problem is that most people only remember their purchase price. They
        forget about the closing costs that count, the kitchen remodel they did
        in 2016, the new roof in 2019, and the HVAC system they replaced last
        year. All of those investments can increase your cost basis and
        potentially save you thousands, sometimes tens of thousands, in taxes.
      </p>
      <p>
        This guide will walk you through what cost basis means in plain English,
        how to calculate it, and why tracking it throughout your years of
        homeownership is one of the smartest financial moves you can make.
      </p>

      <h2>What Is Cost Basis?</h2>
      <p>
        In the simplest terms, your home&apos;s cost basis is the total amount
        you have invested in the property for tax purposes. When you eventually
        sell your home, the IRS calculates your <strong>capital gain</strong> as
        the difference between your sale price (minus selling expenses) and your
        cost basis. The lower your basis, the higher your gain, and the more tax
        you may owe.
      </p>
      <p>
        Think of it like this: the IRS doesn&apos;t just want to know what you
        paid for the house. They want to know the full picture of your
        investment, including the money you spent to acquire it and the money you
        spent to improve it over the years.
      </p>
      <p>
        Your cost basis is made up of two main components: your{" "}
        <strong>starting basis</strong> (what you paid to acquire the home) and
        your <strong>adjustments</strong> (primarily capital improvements you
        made during ownership). Together, these form your{" "}
        <strong>adjusted basis</strong>, which is the number that actually
        matters when you sell.
      </p>

      <h2>Your Starting Basis: More Than Just the Purchase Price</h2>
      <p>
        Your starting basis begins with the price you paid for the home, but it
        does not stop there. Certain closing costs from when you purchased the
        property are added to your basis. These are costs that are directly
        related to acquiring the property itself, not costs related to obtaining
        your mortgage or prepaying ongoing expenses.
      </p>

      <h3>Closing Costs That Increase Your Basis</h3>
      <p>
        The following closing costs are generally added to your starting basis
        because they are considered part of the cost of acquiring the property:
      </p>
      <ul>
        <li>
          <strong>Title insurance premiums</strong> — Both the owner&apos;s
          policy and lender&apos;s policy premiums paid at closing.
        </li>
        <li>
          <strong>Attorney fees</strong> — Legal fees for the real estate
          transaction, title search, and document preparation.
        </li>
        <li>
          <strong>Recording fees</strong> — Fees charged by your county to
          record the deed and mortgage.
        </li>
        <li>
          <strong>Transfer taxes</strong> — State or local taxes charged when
          the property changes hands (sometimes called stamp taxes or deed
          taxes).
        </li>
        <li>
          <strong>Survey fees</strong> — The cost of having the property
          surveyed.
        </li>
        <li>
          <strong>Title search and examination fees</strong> — Costs for
          verifying the seller has clear title to the property.
        </li>
        <li>
          <strong>Owner&apos;s title insurance</strong> — The premium for your
          title insurance policy that protects your ownership.
        </li>
        <li>
          <strong>Escrow and settlement fees</strong> — Fees paid to the
          closing agent or escrow company for handling the transaction.
        </li>
      </ul>

      <h3>Closing Costs That Do NOT Increase Your Basis</h3>
      <p>
        Not everything on your closing statement counts. The following costs are
        either deductible elsewhere on your taxes or are considered prepaid
        expenses, not part of the property&apos;s acquisition cost:
      </p>
      <ul>
        <li>
          <strong>Prepaid mortgage interest (per diem interest)</strong> — This
          is deductible as mortgage interest, not added to basis.
        </li>
        <li>
          <strong>Homeowner&apos;s insurance premiums</strong> — This is an
          ongoing expense, not an acquisition cost.
        </li>
        <li>
          <strong>Property tax escrow deposits</strong> — Prepaid taxes held in
          escrow are not part of your acquisition cost.
        </li>
        <li>
          <strong>Mortgage insurance premiums (PMI/MIP)</strong> — These relate
          to your loan, not the property purchase.
        </li>
        <li>
          <strong>Loan origination fees and discount points</strong> — These are
          costs of obtaining financing and are generally deductible as interest
          rather than added to basis. (Note: in some situations, points may be
          amortized over the life of the loan.)
        </li>
        <li>
          <strong>Home inspection fees</strong> — The IRS generally considers
          these a personal expense, not an acquisition cost.
        </li>
        <li>
          <strong>Appraisal fees required by the lender</strong> — Since these
          are a condition of your mortgage, they relate to financing rather than
          acquisition.
        </li>
      </ul>
      <p>
        For a deeper dive into exactly which closing costs affect your basis,
        see our full guide on{" "}
        <Link href="/blog/closing-costs-and-cost-basis/">
          closing costs and cost basis
        </Link>
        .
      </p>

      <h2>Adjusted Basis: The Number That Really Matters</h2>
      <p>
        Once you have your starting basis established, the next step is tracking
        every <strong>capital improvement</strong> you make to the home over the
        years. A capital improvement is any project that adds value to the home,
        prolongs its useful life, or adapts it to a new use. These are different
        from routine repairs and maintenance, which do not increase your basis.
      </p>
      <p>
        Your <strong>adjusted basis</strong> is calculated as:
      </p>
      <p>
        <strong>
          Adjusted Basis = Starting Basis + Capital Improvements - Casualty
          Losses - Depreciation (if applicable)
        </strong>
      </p>
      <p>
        For most primary homeowners who never rented out a portion of their home
        or claimed a home office depreciation deduction, the formula simplifies
        to:
      </p>
      <p>
        <strong>Adjusted Basis = Starting Basis + Capital Improvements</strong>
      </p>
      <p>
        This is why tracking your improvements is so important. Every dollar you
        add to your adjusted basis is a dollar that reduces your taxable gain
        when you sell.
      </p>

      <h2>A Worked Example: How Tracking Saves You Real Money</h2>
      <p>
        Let&apos;s walk through a realistic scenario to see how this plays out in
        practice.
      </p>
      <h3>The Setup</h3>
      <p>
        Sarah and David bought their home 12 years ago for{" "}
        <strong>$350,000</strong>. At closing, they paid $12,000 in qualifying
        closing costs (title insurance, attorney fees, recording fees, and
        transfer taxes). Their <strong>starting basis</strong> is:
      </p>
      <p>
        <strong>$350,000 + $12,000 = $362,000</strong>
      </p>

      <h3>Improvements Over the Years</h3>
      <p>Over 12 years of ownership, they made the following capital improvements:</p>
      <ul>
        <li>Kitchen remodel (new cabinets, countertops, appliances): $35,000</li>
        <li>New roof: $18,000</li>
        <li>HVAC system replacement: $12,000</li>
        <li>New windows throughout the house: $15,000</li>
        <li>Finished basement: $5,000</li>
      </ul>
      <p>
        Total capital improvements: <strong>$85,000</strong>
      </p>
      <p>
        Their <strong>adjusted basis</strong> is:
      </p>
      <p>
        <strong>$362,000 + $85,000 = $447,000</strong>
      </p>

      <h3>The Sale</h3>
      <p>
        They sell the home for <strong>$650,000</strong>. Now let&apos;s compare
        what happens with and without proper basis tracking.
      </p>

      <h3>Without Tracking Improvements</h3>
      <p>
        If Sarah and David only remembered their purchase price and didn&apos;t
        track their closing costs or improvements, their basis would be just
        $350,000. Their apparent capital gain would be:
      </p>
      <p>
        <strong>$650,000 - $350,000 = $300,000 gain</strong>
      </p>
      <p>
        As a married couple, they can exclude $250,000 per person ($500,000
        total) under the{" "}
        <Link href="/blog/section-121-exclusion-guide/">
          Section 121 exclusion
        </Link>
        . Since $300,000 is under $500,000, they would owe nothing in this
        scenario. But what if the numbers were higher, or they were single
        filers? The difference becomes enormous.
      </p>
      <p>
        Let&apos;s adjust the example slightly. Say the home sold for{" "}
        <strong>$750,000</strong> instead:
      </p>
      <ul>
        <li>
          <strong>Without tracking:</strong> $750,000 - $350,000 = $400,000
          gain. After the $250,000 single-filer exclusion, $150,000 is taxable.
          At a 15% capital gains rate, that is{" "}
          <strong>$22,500 in federal tax</strong>.
        </li>
        <li>
          <strong>With tracking:</strong> $750,000 - $447,000 = $303,000 gain.
          After the $250,000 exclusion, $53,000 is taxable. At 15%, that is{" "}
          <strong>$7,950 in federal tax</strong>.
        </li>
      </ul>
      <p>
        The difference: <strong>$14,550 in tax savings</strong>, just from
        keeping records of improvements and qualifying closing costs that they
        already paid for. That is money saved, not money spent.
      </p>
      <p>
        And this is a relatively modest example. Homeowners who have owned for 20
        or 30 years, especially in markets with significant appreciation, can see
        far larger savings. It is not uncommon for long-term homeowners to have
        gains well above the Section 121 exclusion threshold, making every dollar
        of tracked basis directly valuable.
      </p>

      <h2>What Counts as a Capital Improvement?</h2>
      <p>
        The IRS draws a clear line between <strong>capital improvements</strong>{" "}
        (which increase your basis) and <strong>repairs</strong> (which do not).
        The general rule is that an improvement adds value, prolongs the
        home&apos;s life, or adapts it to a new use. A repair simply maintains
        the home in its current condition.
      </p>
      <p>Common examples of capital improvements include:</p>
      <ul>
        <li>Kitchen or bathroom remodels</li>
        <li>New roof or roof replacement</li>
        <li>HVAC system replacement</li>
        <li>New windows or doors</li>
        <li>Adding a deck, patio, or porch</li>
        <li>Finishing a basement or attic</li>
        <li>New landscaping or hardscaping (retaining walls, driveways)</li>
        <li>Adding or upgrading insulation</li>
        <li>New flooring throughout the home</li>
        <li>Adding a fence, shed, or other outbuilding</li>
      </ul>
      <p>
        The distinction can get tricky in gray areas. Replacing a single broken
        window pane is a repair. Replacing all the windows in your home is an
        improvement. Patching a small section of drywall is a repair. Gutting and
        refinishing an entire room is an improvement.
      </p>
      <p>
        We cover this in much more detail, including the IRS&apos;s three-part
        test for classifying improvements, in our complete guide to{" "}
        <Link href="/blog/capital-improvement-vs-repair/">
          capital improvements vs. repairs
        </Link>
        .
      </p>

      <h2>How to Track Your Cost Basis</h2>
      <p>
        Knowing that cost basis matters is the first step. Actually tracking it
        is where most homeowners fall short. The challenge is that home
        improvements happen over years and even decades. By the time you sell,
        you may have owned the home for 10, 20, or 30 years. Receipts get lost.
        Memories fade. Contractors go out of business.
      </p>
      <p>
        Here are the most common approaches homeowners use to track their basis:
      </p>

      <h3>The Spreadsheet Approach</h3>
      <p>
        Many financially savvy homeowners keep a spreadsheet listing each
        improvement, the date, the cost, and a description of the work. This is
        better than nothing, but it has limitations:
      </p>
      <ul>
        <li>
          It requires discipline to update consistently over many years.
        </li>
        <li>
          It does not help you classify whether something is an improvement or a
          repair.
        </li>
        <li>
          Receipts and invoices stored separately can get lost.
        </li>
        <li>
          There is no built-in calculation of your adjusted basis or estimated
          tax impact.
        </li>
      </ul>

      <h3>The Shoebox Approach</h3>
      <p>
        Some homeowners simply keep receipts in a folder or box and plan to sort
        through them at tax time. This approach usually works for a year or two,
        then falls apart. By the time you sell, you are digging through years of
        disorganized paperwork, likely missing half of what you need.
      </p>

      <h3>A Dedicated Tracking Tool</h3>
      <p>
        The most effective approach is using a tool purpose-built for this task.
        HomeBasis is a free app designed specifically to help homeowners track
        their home&apos;s cost basis over time. It walks you through classifying
        each project as an improvement or a repair using IRS guidelines, stores
        your receipts alongside each entry, calculates your adjusted basis
        automatically, and even estimates your potential tax savings with a
        &quot;What If I Sold?&quot; tool that factors in the{" "}
        <Link href="/blog/section-121-exclusion-guide/">
          Section 121 exclusion
        </Link>
        .
      </p>
      <p>
        The key advantage of any systematic approach is starting early. The
        best time to begin tracking your home&apos;s cost basis is the day you
        buy it. The second-best time is today. Even if you have owned your home
        for years, you can reconstruct your improvement history from bank
        statements, credit card records, contractor invoices, and permit records
        at your local building department.
      </p>

      <h2>Why This Matters More Than You Think</h2>
      <p>
        Many homeowners assume the Section 121 exclusion will cover their entire
        gain, so tracking basis does not matter. For some, that is true. But
        consider a few scenarios where it absolutely does matter:
      </p>
      <ul>
        <li>
          <strong>Long-term homeowners in appreciating markets:</strong> If you
          bought your home 20 years ago and it has tripled in value, your gain
          could easily exceed the $250K/$500K exclusion.
        </li>
        <li>
          <strong>Single filers:</strong> The $250,000 exclusion for single
          filers is half of the married amount. Even moderate appreciation over a
          long holding period can push your gain above the threshold.
        </li>
        <li>
          <strong>Homeowners who converted rental property:</strong> If you
          rented your home before living in it (or vice versa), the rules are
          more complex, and your tracked improvements become even more critical.
        </li>
        <li>
          <strong>High-cost-of-living areas:</strong> In cities like San
          Francisco, New York, Seattle, or Austin, even a home purchased 10 years
          ago may have appreciated by $500K or more.
        </li>
        <li>
          <strong>Estate planning:</strong> While inherited properties generally
          get a stepped-up basis, having detailed records of improvements can be
          important during the transition and for establishing the accurate
          stepped-up value.
        </li>
      </ul>

      <h2>Key Takeaways</h2>
      <p>
        Your home&apos;s cost basis is the total of what you invested in
        acquiring and improving it. The higher your basis, the less you owe in
        capital gains tax when you sell. Here is what to remember:
      </p>
      <ol>
        <li>
          <strong>Your starting basis</strong> is your purchase price plus
          qualifying closing costs.
        </li>
        <li>
          <strong>Your adjusted basis</strong> adds all capital improvements made
          during ownership.
        </li>
        <li>
          <strong>Not all projects count</strong> — only capital improvements,
          not repairs, increase your basis. Learn the difference in our{" "}
          <Link href="/blog/capital-improvement-vs-repair/">
            capital improvement vs. repair guide
          </Link>
          .
        </li>
        <li>
          <strong>The Section 121 exclusion</strong> protects many homeowners,
          but not all. If your gain exceeds $250K (single) or $500K (married),
          your tracked improvements directly reduce your tax bill. Read more in
          our{" "}
          <Link href="/blog/section-121-exclusion-guide/">
            Section 121 exclusion guide
          </Link>
          .
        </li>
        <li>
          <strong>Start tracking today.</strong> Whether you use a spreadsheet or
          a dedicated tool like HomeBasis, the important thing is to start.
        </li>
      </ol>
      <p>
        The homeowners who save the most at tax time are not the ones who earn
        the most or have the fanciest accountants. They are the ones who kept
        good records. Your future self will thank you.
      </p>
    </BlogPostLayout>
  );
}
