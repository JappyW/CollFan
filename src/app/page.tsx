import { navBarLinks } from "@/constants";
import { Quote } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav className="py-10 w-full bg-gradient-to-b to-white from-blue-300 shadow-lg text-primary-foreground">
          <div className="flex items-center justify-between relative">
            <div className="pl-6 text-xl font-bold">
              <Link
                href="/"
                className="text-[var(--primary-color)] [font-family:var(--font-family-heading)] lg:text-3xl"
              >
                <span>COOLLect</span>
              </Link>
            </div>

            <div className="ml-auto mt-4 flex items-center justify-between bg-transparent">
              <ul className="flex flex-row max-sm:flex-col px-6 justify-end items-center gap-x-4">
                <li className="p-2 ">
                  <Link href="/creators" className="px-4 py-2">
                    Creators
                  </Link>
                </li>
                <li className="p-2 ">
                  <Link href="/games" className="px-4 py-2">
                    Games
                  </Link>
                </li>
                <li className="p-2 ">
                  <Link href="/login" className="px-4 py-2">
                    Log In
                  </Link>
                </li>
                <li className="p-2 ">
                  <Link href="/register" className="px-4 py-2">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="[font-family:var(--font-family-body)]">
          <div>
            <div id="s75xe5d">
              <section
                className="bg-gradient-to-b from-[#ffffff] to-blue-300 md:py-2 code-section min-h-[calc(100vh-64px)]"
                id="s75xe5d"
              >
                <div className="container mx-auto px-6">
                  <div className="flex flex-col-reverse items-center lg:flex-row">
                    <div className="mt-12 w-full lg:mt-32 lg:w-[45%] lg:pr-14">
                      <h1 className="mb-4 text-center text-4xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl xl:text-6xl text-background">
                        Elevate Your Gaming Experience with COOLLect
                      </h1>
                      <p className="mb-12 text-center text-xl lg:text-left text-background">
                        Unlock unparalleled features with COOLLect, where you have access to comprehensive game
                        information, creator profiles, and the exclusive currency—Diamonds—to enhance your trading
                        experience.
                      </p>
                      <div className="mb-12 flex items-center justify-center lg:items-start lg:justify-start">
                        <Link
                          href="/login"
                          className="items-center rounded bg-blue-400 px-4 py-2 text-lg font-semibold hover:bg-blue-500 text-primary-foreground"
                        >
                          Get Started
                        </Link>
                      </div>
                      <div className="flex items-center pb-10">
                        <img
                          src="https://media.gettyimages.com/id/2156062809/photo/headshot-closeup-portrait-middle-eastern-israel-businesswoman-business-lady-standing-isolated.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=mPEqaET5s98W_40DmBTRbYY5z0F-_1YkqdC4TCHJeig="
                          alt="Happy Customer"
                          className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                          data-landingsite-gallery-type="image"
                          data-testimonial-image=""
                          data-dont-replace=""
                          data-media='{"id":"2156062809","src":"iStock","type":"image"}'
                        />
                        <div>
                          <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1" aria-hidden="true"></i>
                          <p className="mb-2 inline text-lg text-primary-foreground">
                            COOLLect has revolutionized the way I engage with trading cards, connecting me with creators
                            and allowing seamless trades.
                          </p>
                          <p className="flex gap-2">
                            <Quote />
                            <span className="font-semibold text-primary-foreground">Jane Doe</span>
                            <span className="font-semibold text-primary-foreground">(Trading Card Enthusiast)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-full h-full lg:w-[55%] lg:pl-6">
                      <img
                        src="/hero.png"
                        alt="Hero"
                        className="mt-8 max-h-[200px] lg:max-h-[500px] h-auto w-auto object-contain lg:mt-0"
                        data-landingsite-gallery-type="illustration"
                        data-seo-image=""
                        data-media='{"id":"8bf581b0-996b-11ec-9e22-0242ac140003","src":"iconscout","type":"illustration"}'
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="bg-blue-300">
            <div id="s57ljfp">
              <section className="py-20 code-section" id="s57ljfp">
                <div className="container mx-auto px-6">
                  <h2 className="mb-6 text-center text-6xl font-bold [font-family:var(--font-family-heading)] text-primary-foreground">
                    How COOLLect Works
                  </h2>
                  <h3 className="mb-12 text-center text-xl text-primary-foreground">
                    Discover the seamless integration of your gaming experience with COOLLect
                  </h3>
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex-1 rounded-3xl bg-card p-8 text-center shadow-md shadow-[#cccccc7d] md:max-w-xs md:p-12">
                      <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
                        <span className="text-[var(--primary-color)]">1</span>
                      </div>
                      <h4 className="mb-2 text-2xl font-semibold">Connect Your Accounts</h4>
                      <p className="text-[var(--gray-text-color)]">
                        Link your gaming profiles to COOLLect to streamline access to all your game stats, achievements,
                        and creator content in one place.
                      </p>
                    </div>
                    <div className="flex-1 rounded-3xl bg-card p-8 text-center shadow-md shadow-[#cccccc7d] md:max-w-xs md:p-12">
                      <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
                        <span className="text-[var(--primary-color)]">2</span>
                      </div>
                      <h4 className="mb-2 text-2xl font-semibold">Customize Your Experience</h4>
                      <p className="text-[var(--gray-text-color)]">
                        Tailor your dashboard with personalized settings to receive updates on your favorite games,
                        creators, and exclusive offers on Diamonds, ensuring you never miss a beat.
                      </p>
                    </div>
                    <div className="flex-1 rounded-3xl bg-card p-8 text-center shadow-md shadow-[#cccccc7d] md:max-w-xs md:p-12">
                      <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
                        <span className="text-[var(--primary-color)]">3</span>
                      </div>
                      <h4 className="mb-2 text-2xl font-semibold">Engage with Creators</h4>
                      <p className="text-[var(--gray-text-color)]">
                        Collaborate with prominent game creators through our platform. Gain valuable insights, tips, and
                        strategies directly from industry influencers to enhance your gameplay.
                      </p>
                    </div>
                    <div className="flex-1 rounded-3xl bg-card p-8 text-center shadow-md shadow-[#cccccc7d] md:max-w-xs md:p-12">
                      <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
                        <span className="text-[var(--primary-color)]">4</span>
                      </div>
                      <h4 className="mb-2 text-2xl font-semibold">Utilize Diamonds Wisely</h4>
                      <p className="text-[var(--gray-text-color)]">
                        Leverage Diamonds to trade cards and unlock unique features within our community. Our platform
                        provides easy guidance on how to maximize your Diamond purchases and trading opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="bg-blue-300">
            <div id="swzmrye">
              <section className="code-section" id="swzmrye">
                <div className="container mx-auto px-6 lg:pt-24">
                  <div className="flex flex-col items-stretch lg:flex-row">
                    <div className="flex flex-1 items-center justify-center rounded-3xl bg-[var(--light-background-color)] p-6 lg:w-1/2">
                      <img
                        className="mx-auto rounded-3xl"
                        src="https://cdni.iconscout.com/illustration/premium/thumb/boys-playing-game-in-online-gaming-competition-5004705-4206798.png"
                        alt="Hero"
                        data-landingsite-gallery-type="illustration"
                        data-media='{"id":"8bf63c20-996b-11ec-a6e0-0242ac140003","src":"iconscout","type":"illustration"}'
                      />
                    </div>
                    <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0 text-primary-foreground">
                      <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl">
                        Elevate Your Gaming Experience
                      </h2>
                      <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
                        COOLLect is your ultimate hub for valuable insights in gaming.
                      </p>
                      <ul className="mb-12 list-disc pl-6 text-xl">
                        <li className="mb-3">Seamlessly link your profiles for centralized achievement tracking</li>
                        <li className="mb-3">Personalize your dashboard for real-time updates on games and creators</li>
                        <li className="mb-3">Collaborate with top creators for expert strategies</li>
                        <li>Maximize your Diamond usage for smart trading opportunities</li>
                      </ul>
                      <div className="flex justify-center lg:block">
                        <Link
                          href="/diamonds"
                          className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
                        >
                          Join COOLLect Now!
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="https://media.gettyimages.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=Oxn1hxRZ43vNbYcRlsKQs0Wa8zT344VOIJfGbd_qMtY="
                          alt="Profile"
                          className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                          data-landingsite-gallery-type="image"
                          data-testimonial-image=""
                          data-dont-replace=""
                          data-media='{"id":"1490764451","src":"iStock","type":"image"}'
                        />
                        <div>
                          <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1" aria-hidden="true"></i>
                          <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                            COOLLect transformed my gaming experience! The insights and tools are invaluable!
                          </p>
                          <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1" aria-hidden="true"></i>
                          <p>
                            <span className="font-semibold text-[var(--dark-text-color)]">John Smith</span>
                            <span className="pl-2 font-semibold text-[var(--primary-color)]">(Gaming Enthusiast)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="bg-blue-300">
            <div id="su9ghh5">
              <section className="code-section" id="su9ghh5">
                <div className="container mx-auto px-6 pb-12 pt-12 lg:pt-24">
                  <div className="flex flex-col-reverse items-stretch lg:flex-row text-primary-foreground">
                    <div className="lg:w-1/2 lg:pr-20">
                      <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-5xl lg:text-left">
                        Enhance Your Gaming Experience with COOLLect
                      </h2>
                      <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
                        Discover comprehensive game-related resources at COOLLect. Access an extensive database packed
                        with the latest game information, updates on new releases, and expertly crafted guides to refine
                        your skills and elevate your gameplay.
                      </p>
                      <ul className="mb-12 list-disc pl-8 text-xl">
                        <li className="mb-3">Link Your Gaming Profiles seamlessly</li>
                        <li className="mb-3">Personalize Your Dashboard for tailored updates</li>
                        <li className="mb-3">Engage with Top Creators for exclusive insights</li>
                        <li>Master Your Diamond Usage for effective card trading</li>
                      </ul>
                      <div className="flex justify-center lg:block">
                        <Link
                          href="/diamonds"
                          className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
                        >
                          Join COOLLect Today!
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="https://media.gettyimages.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=K1pIuZ-758hZpczvQSLjxvyqeOwy5t5EklPn_ykBHfo="
                          alt="Profile"
                          className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                          data-landingsite-gallery-type="image"
                          data-testimonial-image=""
                          data-dont-replace=""
                          data-media='{"id":"1309489745","src":"iStock","type":"image"}'
                        />
                        <div>
                          <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1" aria-hidden="true"></i>
                          <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                            COOLLect has transformed how I connect with games—informative, engaging, and intuitive!
                          </p>
                          <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1" aria-hidden="true"></i>
                          <p>
                            <span className="font-semibold text-[var(--dark-text-color)]">Emily Carter</span>
                            <span className="pl-2 font-semibold text-[var(--primary-color)]">(Gaming Influencer)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 flex flex-1 items-center justify-center rounded-[var(--button-rounded-radius)] bg-[var(--light-background-color)] p-6 lg:w-1/2">
                      <img
                        className="mx-auto rounded-[var(--button-rounded-radius)]"
                        src="https://cdni.iconscout.com/illustration/premium/thumb/online-gaming-competition-5004687-4206780.png"
                        alt="Hero"
                        data-landingsite-gallery-type="illustration"
                        data-media='{"id":"8bf56560-996b-11ec-ba53-0242ac140003","src":"iconscout","type":"illustration"}'
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="bg-blue-300">
            <div id="slw18do">
              <section className="code-section" id="slw18do">
                <div className="container mx-auto px-6 py-6 md:py-12">
                  <div className="rounded-3xl bg-[var(--light-background-color)] px-4 py-8 md:py-40">
                    <h2 className="mx-auto mb-4 max-w-4xl text-center text-3xl font-bold [font-family:var(--font-family-heading)] md:text-6xl text-primary-foreground">
                      Elevate Your Gaming Journey with COOLLect
                    </h2>
                    <p className="mb-8 text-center text-xl text-primary-foreground">
                      Your essential resource for game insights, creator profiles, and Diamonds for card trading.
                      Enhance your skills and stay ahead in the gaming world.
                    </p>
                  </div>
                  <div className="-mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 lg:-mt-36 lg:grid lg:flex-none lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:gap-y-12">
                    <div className="max-w-sm flex-1 rounded-3xl bg-card p-14 text-center shadow-md shadow-[#cccccc7d]">
                      <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
                        <span className="text-[var(--primary-color)]">1</span>
                      </div>
                      <h4 className="mb-6 text-3xl font-semibold">Link Your Gaming Accounts</h4>
                      <p className="text-[var(--dark-text-color)]">
                        Streamline your experience by connecting your gaming profiles. Access achievements, stats, and
                        creator content in one place.
                      </p>
                    </div>
                    <div className="max-w-sm flex-1 rounded-3xl bg-card p-14 text-center shadow-md shadow-[#cccccc7d]">
                      <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
                        <span className="text-[var(--primary-color)]">2</span>
                      </div>
                      <h4 className="mb-6 text-3xl font-semibold">Personalize Your Dashboard</h4>
                      <p className="text-[var(--dark-text-color)]">
                        Create a customized environment that keeps you updated with notifications for your favorite
                        games and exclusive Diamond deals.
                      </p>
                    </div>
                    <div className="max-w-sm flex-1 rounded-3xl bg-card p-14 text-center shadow-md shadow-[#cccccc7d]">
                      <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
                        <span className="text-[var(--primary-color)]">3</span>
                      </div>
                      <h4 className="mb-6 text-3xl font-semibold">Collaborate with Influential Creators</h4>
                      <p className="text-[var(--dark-text-color)]">
                        Engage with top creators and gain insights that will enhance your gameplay strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="bg-blue-300">
            <div id="sgeyf9">
              <section className="code-section" id="sgeyf9">
                <div className="container mx-auto px-6 py-12">
                  <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:px-40 sm:text-6xl text-primary-foreground">
                    Unlock the full potential of your gaming experience with COOLLect
                  </h2>
                  <p className="text-center text-xl sm:mb-16 text-primary-foreground">
                    Choose from our tailored plans designed for every type of gamer
                  </p>
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col my-6 flex-1 rounded-3xl bg-card px-4 py-12 text-center shadow-md shadow-[#cccccc7d] sm:mx-6 sm:px-10">
                      <h4 className="mb-4 text-4xl font-semibold">Basic Plan</h4>
                      <p className="mb-8 font-light text-[var(--dark-text-color)] xl:text-xl grow">
                        Start your journey as a casual gamer with 14 days of complimentary access to essential game
                        information and connect with fellow players. Dive into gaming without commitments.
                      </p>
                      <p className="mb-2 text-6xl font-bold text-[var(--primary-color)]">$0</p>
                      <p className="mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]">
                        14 Day Free Trial
                      </p>
                      <Link
                        href="/login"
                        className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-primary py-4 font-semibold uppercase text-[var(--dark-text-color)]"
                      >
                        Select This Plan
                      </Link>
                      <ul className="space-y-3 font-light">
                        <li className="flex min-h-[28px] items-center">
                          <i
                            className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                            aria-hidden="true"
                          ></i>
                          <span className="text-left text-lg text-[var(--dark-text-color)]">
                            Access to Game Information
                          </span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                          <i
                            className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                            aria-hidden="true"
                          ></i>
                          <span className="text-left text-lg text-[var(--dark-text-color)]">Community Connection</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                          <i
                            className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                            aria-hidden="true"
                          ></i>
                          <span className="text-left text-lg text-[var(--dark-text-color)]">Casual Gaming Access</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col relative my-6 flex-1 rounded-3xl bg-card px-4 py-12 text-center shadow-md shadow-[#cccccc7d] sm:mx-6 sm:px-10">
                      <div className="absolute -top-6 left-1/4 mb-2 flex h-[54px] w-1/2 items-center justify-center rounded text-primary bg-secondary-foreground px-2 py-1 text-center text-xl font-semibold uppercase">
                        Most Popular
                      </div>
                      <h4 className="mb-4 text-4xl font-semibold">Business Plan</h4>
                      <p className="mb-8 font-light xl:text-xl grow">
                        For those seeking deeper engagement, this plan offers an expansive resource library, insights
                        from top creators, and trading capabilities using Diamonds—just $20 a month after your free
                        trial.
                      </p>
                      <p className="mb-3 text-6xl font-bold">$20</p>
                      <p className="mb-9 text-lg font-light uppercase">Monthly Subscription</p>
                      <Link
                        href="/login"
                        className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-primary py-4 font-semibold uppercase text-[var(--dark-text-color)]"
                      >
                        Select This Plan
                      </Link>
                      <ul className="space-y-3 font-light ">
                        <li className="flex min-h-[28px] items-center">
                          <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                          <span className="text-left text-lg">Expanded Resource Library</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                          <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                          <span className="text-left text-lg">Diamonds for Trading</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                          <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                          <span className="text-left text-lg">Valuable Creator Insights</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col my-6 flex-1 rounded-3xl bg-card px-4 py-12 text-center shadow-md shadow-[#cccccc7d] sm:mx-6 sm:px-10">
                      <h4 className="mb-4 text-4xl font-semibold">Enterprise Plan</h4>
                      <div className="mb-8 font-light text-[var(--dark-text-color)] xl:text-xl flex grow">
                        Go all out with unlimited access to exclusive trading opportunities and personalized support.
                        Start your trial for just $0.00 with a 14-day free option.
                      </div>
                      <p className="mb-3 text-6xl font-bold text-[var(--primary-color)]">$99</p>
                      <p className="mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]">
                        14 Day Free Trial
                      </p>
                      <Link
                        href="/login"
                        className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-primary py-4 font-semibold uppercase text-[var(--dark-text-color)]"
                      >
                        Select This Plan
                      </Link>
                      <ul className="space-y-3 font-light">
                        <li className="flex min-h-[28px] items-center">
                          <i
                            className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                            aria-hidden="true"
                          ></i>
                          <span className="text-left text-lg text-[var(--dark-text-color)]">
                            Unlimited Features Access
                          </span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                          <i
                            className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                            aria-hidden="true"
                          ></i>
                          <span className="text-left text-lg text-[var(--dark-text-color)]">
                            Exclusive Trading Opportunities
                          </span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                          <i
                            className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                            aria-hidden="true"
                          ></i>
                          <span className="text-left text-lg text-[var(--dark-text-color)]">Personalized Support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="bg-blue-300">
            <div id="s9z1xye">
              <section className="code-section" id="s9z1xye">
                <div className="container mx-auto px-4 py-12">
                  <h2 className="mb-6 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-6xl text-primary-foreground">
                    Latest Insights
                  </h2>
                  <p className="mx-auto mb-8 max-w-4xl text-center text-lg font-light text-primary-foreground sm:text-xl">
                    Dive into the world of gaming with COOLLect, your ultimate resource for everything game-related.
                    Access a rich repository of game information that keeps you informed about the latest titles,
                    in-depth genre overviews, and strategic guides designed to enhance your gameplay experience.
                  </p>
                  <div className="flex flex-wrap items-center justify-center">
                    <div className="m-6 flex-1 rounded-3xl bg-card p-4 shadow-md shadow-[#cccccc7d] max-w-sm">
                      <img
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6653017f-6632-49c8-0bc2-6a5cc629d100/publicContain"
                        alt="Blog"
                        className="h-64 w-full rounded-3xl object-cover"
                        data-landingsite-gallery-type="image"
                        data-media='{"id":"1602367610","src":"iStock","type":"image"}'
                      />
                      <div className="px-4 py-6">
                        <p className="mb-2 uppercase text-[var(--primary-color)]">15 FEB 2023</p>
                        <h3 className="mb-2 text-3xl font-medium">Effortlessly Connect Your Profiles</h3>
                        <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                          Integrate your gaming accounts with COOLLect for easy access to your achievements, stats, and
                          creator content, all in one convenient location.
                        </p>
                        <Link
                          href="/creators"
                          className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
                        >
                          Read More <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="m-6 flex-1 rounded-3xl bg-card p-4 shadow-md shadow-[#cccccc7d] max-w-sm">
                      <img
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/87c5bc14-d303-4400-c7b8-4f33dce1d100/public"
                        alt="Blog"
                        className="h-64 w-full rounded-3xl object-cover"
                        data-landingsite-gallery-type="image"
                        data-media='{"id":"1469920071","src":"iStock","type":"image"}'
                      />
                      <div className="px-4 py-6">
                        <p className="mb-2 uppercase text-[var(--primary-color)]">20 FEB 2023</p>
                        <h3 className="mb-2 text-3xl font-medium">Tailor Your Gaming Dashboard</h3>
                        <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                          Customize your dashboard to receive real-time notifications about your favorite games,
                          creators, and exclusive offers on Diamonds, ensuring you stay ahead of the game.
                        </p>
                        <Link
                          href="/diamonds"
                          className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
                        >
                          Read More <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="m-6 flex-1 rounded-3xl bg-card p-4 shadow-md shadow-[#cccccc7d] max-w-sm">
                      <img
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0df0d8b9-a554-4771-0ce4-07c627c13100/publicContain"
                        alt="Blog"
                        className="h-64 w-full rounded-3xl object-cover"
                        data-landingsite-gallery-type="image"
                        data-media='{"id":"1713943871","src":"iStock","type":"image"}'
                      />
                      <div className="px-4 py-6">
                        <p className="mb-2 uppercase text-[var(--primary-color)]">25 FEB 2023</p>
                        <h3 className="mb-2 text-3xl font-medium">Maximize Your Use of Diamonds</h3>
                        <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                          Learn how to effectively utilize Diamonds to trade cards and open up new features within our
                          community. Our platform provides clear guidance to enhance your trading experience.
                        </p>
                        <Link
                          href="/diamonds"
                          className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
                        >
                          Read More <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="bg-blue-300">
            <div id="s2rmpuj">
              <section className="bg-[var(--light-background-color)] py-12 code-section" id="s2rmpuj">
                <div className="container mx-auto flex flex-col sm:flex-row">
                  <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:w-[55%] md:flex-row">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/online-gaming-competition-winner-5004706-4206799.png"
                      alt="CTA"
                      className="h-auto w-full"
                      data-landingsite-gallery-type="illustration"
                      data-media='{"id":"8bf646e0-996b-11ec-b987-0242ac140003","src":"iconscout","type":"illustration"}'
                    />
                  </div>
                  <div className="flex w-full flex-col justify-center p-8 md:w-[45%] md:pr-14">
                    <h3 className="mb-2 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-left sm:text-6xl text-primary-foreground">
                      Elevate Your Gaming Experience with COOLLect
                    </h3>
                    <p className="mb-12 text-center text-lg text-primary-foreground sm:text-left sm:text-xl">
                      Access comprehensive insights and resources designed specifically for gamers. Dive into our
                      extensive game library, connect with influential creators, and leverage Diamonds to enhance your
                      trading and gameplay experience.
                    </p>
                    <div className="mb-12 flex items-center justify-center md:items-start md:justify-start text-primary-foreground">
                      <Link
                        href="/login"
                        className="items-center rounded bg-blue-400 px-4 py-2 text-lg font-semibold hover:bg-blue-500"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div id="s384ld" className="bg-gradient-to-b to-card from-blue-300">
            <footer className="py-16 code-section" id="s384ld">
              <div className="container mx-auto px-4 text-center">
                <div className="m-8 text-xl font-bold">
                  <Link
                    href="/login"
                    className="text-3xl text-[var(--primary-color)] [font-family:var(--font-family-heading)]"
                  >
                    <span>COOLLect</span>
                  </Link>
                </div>
                <div className="mb-8 flex flex-col justify-center md:flex-row flex-wrap">
                  {navBarLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <p className="text-lg text-[var(--gray-text-color)]">© 2025 COOLLect All Rights Reserved</p>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
