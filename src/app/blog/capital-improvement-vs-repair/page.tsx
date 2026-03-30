import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capital Improvement vs. Repair: What Counts for Your Tax Basis?",
  description:
    "Learn the IRS distinction between capital improvements and repairs, with a category-by-category breakdown of common home projects.",
};

export default function CapitalImprovementVsRepair() {
  return (
    <BlogPostLayout
      title="Capital Improvement vs. Repair: What Counts for Your Tax Basis?"
      description="Learn the IRS distinction between capital improvements and repairs, with a category-by-category breakdown of common home projects."
      date="March 28, 2026"
    >
      <p>
        You just spent $18,000 on a new roof. Or maybe $4,500 fixing the
        furnace. You know you spent the money, but does it actually help you at
        tax time? The answer depends on whether the IRS considers your project a{" "}
        <strong>capital improvement</strong> or a <strong>repair</strong>, and
        the difference between the two can be worth thousands of dollars when you
        eventually sell your home.
      </p>
      <p>
        Capital improvements increase your home&apos;s{" "}
        <Link href="/blog/home-cost-basis-explained/">cost basis</Link>, which
        reduces your taxable capital gain when you sell. Repairs, on the other
        hand, do not affect your basis at all. They are considered routine
        maintenance, the cost of keeping your home livable, and the IRS gives
        them no special treatment when calculating your gain on sale.
      </p>
      <p>
        This guide breaks down the IRS rules in plain language, gives you a
        category-by-category reference for common home projects, and explains
        the gray areas where the line between improvement and repair gets blurry.
      </p>

      <h2>The IRS Distinction: Improvement vs. Repair</h2>
      <p>
        At the highest level, the IRS defines a capital improvement as an
        expenditure that does one of the following:
      </p>
      <ul>
        <li>
          <strong>Adds value</strong> to the property
        </li>
        <li>
          <strong>Prolongs its useful life</strong> substantially
        </li>
        <li>
          <strong>Adapts it to a new or different use</strong>
        </li>
      </ul>
      <p>
        A repair, by contrast, simply <strong>maintains the property</strong> in
        its current condition. It fixes something that is broken, worn, or
        deteriorating, returning it to the state it was already in rather than
        making it materially better.
      </p>
      <p>
        This may sound straightforward, but in practice, the line between
        &quot;maintaining&quot; and &quot;improving&quot; is not always obvious.
        To bring more clarity, the IRS uses a framework commonly referred to as
        the <strong>B.A.R. test</strong>.
      </p>

      <h2>The Three IRS Tests: Betterment, Adaptation, Restoration</h2>
      <p>
        Under the IRS tangible property regulations (IRC Section 263(a) and the
        related Treasury Regulations), an expenditure on a property is treated as
        a capital improvement if it meets any one of three tests. You do not need
        to meet all three, just one.
      </p>

      <h3>1. Betterment</h3>
      <p>
        A project is a betterment if it corrects a pre-existing defect or
        condition, results in a material upgrade to the property&apos;s capacity,
        productivity, efficiency, strength, or quality, or is a material addition
        to the property.
      </p>
      <p>
        <strong>Examples:</strong>
      </p>
      <ul>
        <li>
          Replacing single-pane windows with double-pane insulated windows. This
          is not just replacing what was there; it materially improves energy
          efficiency.
        </li>
        <li>
          Upgrading a 100-amp electrical panel to a 200-amp panel. This
          increases the system&apos;s capacity.
        </li>
        <li>
          Remodeling a kitchen with new cabinets, countertops, and layout
          changes. This materially upgrades the quality and functionality beyond
          its previous state.
        </li>
        <li>
          Adding a bathroom where there was not one before. This is a material
          addition.
        </li>
      </ul>

      <h3>2. Adaptation</h3>
      <p>
        A project is an adaptation if it changes the property to a new or
        different use that is inconsistent with its original intended use.
      </p>
      <p>
        <strong>Examples:</strong>
      </p>
      <ul>
        <li>
          Converting a garage into a living space or home office. The space was
          designed for car storage and is now being used as habitable square
          footage.
        </li>
        <li>
          Finishing an unfinished basement. Transforming raw, unfinished space
          into a usable living area is a change in use.
        </li>
        <li>
          Converting a bedroom into a home gym with reinforced flooring and
          specialized ventilation.
        </li>
      </ul>
      <p>
        Adaptation is the least common of the three tests for typical
        homeowners, but it comes up more often than you might expect, especially
        as remote work drives more garage and basement conversions.
      </p>

      <h3>3. Restoration</h3>
      <p>
        A project is a restoration if it returns a property component that has
        deteriorated to a state of disrepair back to its ordinarily efficient
        operating condition, rebuilds the property or component to a like-new
        condition after the end of its economic useful life, or replaces a major
        component or substantial structural part of the property.
      </p>
      <p>
        <strong>Examples:</strong>
      </p>
      <ul>
        <li>
          Replacing an entire roof. The roof is a major component of the
          building structure.
        </li>
        <li>
          Replacing the entire HVAC system. This is a major building system that
          has reached the end of its useful life.
        </li>
        <li>
          Re-plumbing the entire house. Replacing the plumbing system in its
          entirety qualifies as a major component replacement.
        </li>
        <li>
          Replacing all of the siding on the home. The siding is a major
          structural component.
        </li>
      </ul>
      <p>
        The restoration test is where many homeowners discover they have been
        underestimating their improvements. Replacing a full system, even if
        you are putting in the same type of system that was there before,
        typically qualifies because you are replacing a major component at the
        end of its useful life.
      </p>

      <h2>Category-by-Category Breakdown</h2>
      <p>
        The following table covers common home projects and their typical IRS
        classification. Keep in mind that specific circumstances can affect
        classification, and projects that combine elements of both improvements
        and repairs may need to be evaluated on a case-by-case basis.
      </p>

      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Classification</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kitchen remodel (new cabinets, counters, layout)</td>
            <td><strong>Improvement</strong></td>
            <td>Betterment: materially upgrades quality and functionality</td>
          </tr>
          <tr>
            <td>New roof or full roof replacement</td>
            <td><strong>Improvement</strong></td>
            <td>Restoration: replaces a major structural component</td>
          </tr>
          <tr>
            <td>HVAC system replacement</td>
            <td><strong>Improvement</strong></td>
            <td>Restoration: replaces a major building system</td>
          </tr>
          <tr>
            <td>Fixing a leaky faucet</td>
            <td><strong>Repair</strong></td>
            <td>Maintains existing plumbing in working condition</td>
          </tr>
          <tr>
            <td>Painting a room (same color, routine refresh)</td>
            <td><strong>Repair</strong></td>
            <td>Maintains current condition and appearance</td>
          </tr>
          <tr>
            <td>New windows throughout the house</td>
            <td><strong>Improvement</strong></td>
            <td>Restoration or betterment: major component replacement and/or energy efficiency upgrade</td>
          </tr>
          <tr>
            <td>Patching drywall</td>
            <td><strong>Repair</strong></td>
            <td>Fixes minor damage, maintains current condition</td>
          </tr>
          <tr>
            <td>Adding a deck or patio</td>
            <td><strong>Improvement</strong></td>
            <td>Betterment: material addition to the property</td>
          </tr>
          <tr>
            <td>Re-grading the yard for drainage</td>
            <td><strong>Improvement</strong></td>
            <td>Betterment: corrects a condition and improves the property</td>
          </tr>
          <tr>
            <td>Replacing a single broken window pane</td>
            <td><strong>Repair</strong></td>
            <td>Fixes one broken component, maintains existing condition</td>
          </tr>
          <tr>
            <td>New water heater</td>
            <td><strong>Improvement</strong></td>
            <td>Restoration: replaces a major building system component</td>
          </tr>
          <tr>
            <td>Replacing worn carpet in one room</td>
            <td><strong>Repair</strong></td>
            <td>Routine maintenance of a single room&apos;s flooring</td>
          </tr>
          <tr>
            <td>New flooring throughout entire house</td>
            <td><strong>Improvement</strong></td>
            <td>Betterment/Restoration: material upgrade of a major component</td>
          </tr>
          <tr>
            <td>Adding insulation</td>
            <td><strong>Improvement</strong></td>
            <td>Betterment: improves energy efficiency of the building</td>
          </tr>
          <tr>
            <td>Unclogging a drain</td>
            <td><strong>Repair</strong></td>
            <td>Routine maintenance to restore normal function</td>
          </tr>
          <tr>
            <td>Finishing a basement</td>
            <td><strong>Improvement</strong></td>
            <td>Adaptation: converts unfinished space to livable area</td>
          </tr>
          <tr>
            <td>New driveway or walkway</td>
            <td><strong>Improvement</strong></td>
            <td>Betterment: material addition to the property</td>
          </tr>
          <tr>
            <td>Replacing a broken garage door spring</td>
            <td><strong>Repair</strong></td>
            <td>Fixes a single broken component</td>
          </tr>
          <tr>
            <td>New fence</td>
            <td><strong>Improvement</strong></td>
            <td>Betterment: material addition to the property</td>
          </tr>
          <tr>
            <td>Sealing the driveway</td>
            <td><strong>Repair</strong></td>
            <td>Routine maintenance to protect existing surface</td>
          </tr>
        </tbody>
      </table>

      <h2>The Gray Areas: When Repairs Become Improvements</h2>
      <p>
        In the real world, home projects rarely fit neatly into one category.
        Here are the most common gray areas that trip up homeowners and even tax
        professionals.
      </p>

      <h3>Scope Creep: The Repair That Grew</h3>
      <p>
        You started by fixing a leaky pipe under the kitchen sink. But once the
        plumber opened the wall, you discovered corroded pipes throughout the
        first floor. What began as a simple repair turned into re-plumbing the
        entire first floor of the house. At some point during that escalation,
        the project crossed the line from repair to improvement.
      </p>
      <p>
        The IRS looks at the final scope of the work, not your original
        intention. If the end result is that you replaced a major component or
        substantially improved the system, it is an improvement regardless of how
        it started.
      </p>

      <h3>The 30% Rule of Thumb</h3>
      <p>
        While not an official IRS rule, tax professionals often use a rough
        guideline: if you are replacing approximately 30% or more of a building
        system (plumbing, electrical, HVAC, etc.), the project likely qualifies
        as an improvement rather than a repair. Replacing a single fixture is a
        repair. Replacing a third of the plumbing in the house is an improvement.
      </p>
      <p>
        This is a guideline, not a bright-line rule. The IRS will look at the
        facts and circumstances of each situation. But it provides a useful
        framework for thinking about where the line falls.
      </p>

      <h3>Cosmetic Projects as Part of Larger Renovations</h3>
      <p>
        Painting a room is normally a repair. But if you paint a room as part of
        a larger kitchen remodel that includes new cabinets, countertops, and
        flooring, the painting cost can be included as part of the overall
        improvement. The IRS allows you to treat the full cost of a renovation
        project as an improvement when the individual repair-type tasks are
        directly connected to and performed as part of a larger improvement
        project.
      </p>
      <p>
        This is important for recordkeeping. When you do a major renovation,
        keep the entire project together as one improvement rather than trying
        to split out the repair portions.
      </p>

      <h3>Replacements: Same Type vs. Upgraded</h3>
      <p>
        Replacing a broken appliance with the same model might seem like a
        repair, but it depends on context. Replacing a single built-in appliance
        is often a repair. But replacing all of the appliances as part of a
        kitchen remodel is part of an improvement. And replacing a system that
        has reached the end of its useful life (like a 25-year-old water heater
        with a new one) is a restoration, even if the new unit is functionally
        identical.
      </p>

      <h2>Why Classification Matters for Your Tax Basis</h2>
      <p>
        The financial stakes of correct classification can be significant. Every
        dollar you correctly classify as a capital improvement increases your{" "}
        <Link href="/blog/home-cost-basis-explained/">adjusted cost basis</Link>,
        which directly reduces your taxable capital gain when you sell.
      </p>
      <p>
        Consider a homeowner who has spent $150,000 on their home over 20 years
        of ownership. If $100,000 of that qualifies as capital improvements and
        $50,000 is repairs, that $100,000 in improvements increases their basis
        by $100,000. If their gain on sale exceeds the{" "}
        <Link href="/blog/section-121-exclusion-guide/">
          Section 121 exclusion
        </Link>{" "}
        threshold, that $100,000 in additional basis could save them $15,000 to
        $23,800 in federal capital gains tax (at 15% to 23.8% rates, depending
        on income).
      </p>
      <p>
        On the other hand, claiming repairs as improvements overstates your
        basis and can create problems if you are audited. Proper classification
        protects you in both directions: it ensures you get credit for every
        legitimate improvement while keeping your records defensible.
      </p>

      <h2>Keeping Records: What You Need to Document</h2>
      <p>
        Good records are just as important as correct classification. The IRS
        can ask you to substantiate your cost basis, and without records, you
        may lose deductions you were legitimately entitled to. For each
        improvement, keep:
      </p>
      <ul>
        <li>
          <strong>Receipts and invoices</strong> — Itemized invoices from
          contractors, receipts from materials purchased for DIY projects.
        </li>
        <li>
          <strong>Dates</strong> — When the project was completed (or the range
          of dates for longer projects).
        </li>
        <li>
          <strong>Descriptions</strong> — A clear description of what was done,
          ideally detailed enough that someone unfamiliar with the project could
          understand the scope.
        </li>
        <li>
          <strong>Before and after photos</strong> — These are not required by
          the IRS, but they can be invaluable in establishing the scope of a
          project if questions arise years later.
        </li>
        <li>
          <strong>Permits</strong> — If the project required a building permit,
          keep a copy. Permits are also helpful because your local building
          department keeps records, providing an independent source of
          verification.
        </li>
        <li>
          <strong>Canceled checks or bank/credit card statements</strong> —
          Proof of payment, especially if original receipts are lost.
        </li>
      </ul>
      <p>
        The challenge, of course, is maintaining these records over 10, 20, or
        30 years of homeownership. This is where a dedicated tracking system
        makes a real difference.
      </p>

      <h3>How HomeBasis Simplifies Classification</h3>
      <p>
        HomeBasis is designed to take the guesswork out of improvement
        classification. When you log a project in the app, it walks you through
        guided questions based on the IRS B.A.R. test to help you determine
        whether the project qualifies as a capital improvement or a repair. It
        stores your receipts, photos, and project details in one place, and
        automatically calculates your adjusted cost basis as you go.
      </p>
      <p>
        Instead of wondering whether that water heater replacement counts or
        trying to remember if the plumber said he replaced &quot;most&quot; of
        the pipes, you have a clear record that was created at the time of the
        project, when the details were fresh.
      </p>

      <h2>Common Mistakes to Avoid</h2>
      <p>
        Based on common misunderstandings, here are the mistakes most likely to
        cost you money or create problems:
      </p>
      <ol>
        <li>
          <strong>Ignoring improvements because you assume the Section 121
          exclusion covers you.</strong> It might, but it might not. Markets
          appreciate unpredictably, and your filing status could change. Track
          everything regardless.
        </li>
        <li>
          <strong>Classifying all spending as improvements.</strong>{" "}
          Overstating your basis is just as problematic as understating it. If
          you are audited, unsupported claims can trigger penalties and interest.
        </li>
        <li>
          <strong>Failing to combine related repairs into a larger
          improvement.</strong> When repairs are done as part of a larger
          renovation, they should be bundled with the improvement, not separated.
        </li>
        <li>
          <strong>Not keeping receipts for DIY projects.</strong> If you did the
          work yourself, the cost of materials still counts toward your basis.
          Your labor does not count, but every dollar of materials, permits, and
          equipment rentals does.
        </li>
        <li>
          <strong>Waiting until you sell to figure this out.</strong> Trying to
          reconstruct 15 years of home improvement history from memory is a
          recipe for missed deductions. Start tracking now.
        </li>
      </ol>

      <h2>Key Takeaways</h2>
      <p>
        The distinction between capital improvements and repairs is one of the
        most important concepts in home tax planning. Here is what to remember:
      </p>
      <ul>
        <li>
          <strong>Improvements</strong> add value, prolong life, or adapt to new
          use. They increase your cost basis.
        </li>
        <li>
          <strong>Repairs</strong> maintain current condition. They do not affect
          your basis.
        </li>
        <li>
          Use the <strong>B.A.R. test</strong> (Betterment, Adaptation,
          Restoration) to classify projects.
        </li>
        <li>
          When in doubt, look at the scope. Larger projects that affect entire
          systems or components tend to be improvements.
        </li>
        <li>
          Keep detailed records of every project, whether it is an improvement
          or a repair. You can always reclassify later with professional advice,
          but you cannot recreate lost records.
        </li>
      </ul>
      <p>
        For a complete walkthrough of how your cost basis is calculated and why
        it matters, see our{" "}
        <Link href="/blog/home-cost-basis-explained/">
          guide to home cost basis
        </Link>
        . And when you are ready to sell, our{" "}
        <Link href="/blog/selling-your-home-tax-guide/">
          selling your home tax guide
        </Link>{" "}
        walks you through the full process, from calculating your gain to filing
        your return.
      </p>
    </BlogPostLayout>
  );
}
