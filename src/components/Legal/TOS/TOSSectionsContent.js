import React from 'react';

import { contactUs } from '../common';

import styles from '../Legal.scss';

export const title = 'Terms of Service';

export const order = [
  'introduction', 'registering_an_account', 'privacy_additional_terms',
  'changes_to_the_terms', 'accepting_an_acount', 'faulty_services',
  'service_information', 'warranty', 'third_party_services_and_linked_websites',
  'access_to_the_site', 'what_you_are_allowed_to_do',
  'what_you_are_not_allowed_to_do', 'termination_of_use',
  'intellectual_property_rights', 'indemnity', 'disclaimers', 'liability',
  'governing_law', 'general', 'dispute_resolution_and_arbitration', 'contact',
];

export const sections = {
  introduction: {
    title: 'Introduction',
    content: [
      <p>
        Welcome, and thank you for your interest in RoundUp Social, Inc., Inc. (<b>RoundUp Social</b>, <b>we</b>, <b>us</b> and <b>our</b>) and our website at <a href="http://letsroundup.com">letsroundup.com</a> and applicable software applications across mobile platforms (collectively, the <b>Site</b>) as well as all related networks. These Terms of Service are a legally binding contract between you and RoundUp Social, and its related service providers, regarding your use of the Site.
      </p>,
      <p>
        By using the Site and/or using the services offered on the Site (<b>Services</b>), you agree to be bound by these Terms. You should print a copy of these terms and conditions for future reference. Use of your personal information submitted to or via the Site is governed by our <a href="http://letsroundup.com/privacy">Privacy and Cookies Policy</a>
      </p>,
      <p>
        These terms and conditions were last updated on Saturday April 30th, 2016.
      </p>,
      <p>
        PLEASE READ THE FOLLOWING TERMS OF SERVICE CAREFULLY. BY CLICKING “I ACCEPT” OR BY ACCESSING OR USING THE SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE FOLLOWING TERMS AND CONDITIONS, INCLUDING THE ROUNDUP SOCIAL PRIVACY POLICY (COLLECTIVELY, THESE <b>TERMS</b>). If you are not eligible, or do not agree to these Terms, then please do not use the Site.
      </p>,
      <p>
        These Terms of Service provide that all disputes between you and RoundUp Social will be resolved by BINDING ARBITRATION. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT TO ASSERT OR DEFEND YOUR RIGHTS UNDER THIS CONTRACT (except for matters that may be taken to small claims court). Your rights will be determined by a NEUTRAL ARBITRATOR and NOT A JUDGE OR JURY and your claims cannot be brought as a class action. Please review the Dispute Resolution in Section 25 for details regarding your agreement to arbitrate any disputes with RoundUp Social.
      </p>,
    ],
  },
  registering_an_account: {
    title: 'Registering an Account',
    content: [
      <ol className={styles.orderedList}>
        <li>
          In order to use our Services you will need to register an account on the Site. To register an account you must:
          <ul className={styles.bulletedList}>
            <li>
              be an individual or representative of a corporate entity with the authority to bind such entity to these Terms;
            </li>
            <li>
              be 16 years old or older; and
            </li>
            <li>
              agree to comply with these terms and conditions or if you are a representative of a corporate entity, agree to comply with these terms and conditions on behalf of such entity.
            </li>
          </ul>
        </li>
        <li>
          You must sign up directly with us via the Site or Application. When signing up, you must provide:
          <ul className={styles.bulletedList}>
            <li>
              your full name;
            </li>
            <li>
              a valid and subsisting email address;
            </li>
            <li>
              a password for accessing your account on the Site; and
            </li>
            <li>
              any other information reasonably requested by us as part of the sign up and service delivery process.
            </li>
          </ul>
        </li>
        <li>
          You represent and warrant that all information you provide to us when registering an account is true and accurate to the best of your knowledge and belief. You must ensure the information in your account is updated regularly with any relevant changes. You must treat your log-on ID and password as confidential and must not reveal it to anyone else. You are responsible for all activities that occur under your log-on ID and must notify us immediately of any unauthorized use or other security breach of which you become aware. We will not be liable for any loss or damage arising from unauthorized use of your credentials prior to you notifying us of such unauthorized use of your account.
        </li>
        <li>
          We reserve the right in our absolute discretion to refuse to register any given prospective user. We reserve the right to disable any log-on ID, at any time, if in our sole discretion and opinion you have failed to comply with any of the provisions of these terms and conditions or if any details you provide for the purposes of registering as a user prove to be false.
        </li>
      </ol>,
    ],
  },
  privacy_additional_terms: {
    title: 'Privacy Policy; Additional Terms',
    content: [
      <ol className={styles.orderedList}>
        <li>
          Please read the RoundUp Social Privacy Policy carefully for information relating to our collection, use, storage and disclosure of your personal information, including phone numbers and calendar entries. The RoundUp Social Privacy Policy is hereby incorporated by reference into, and made a part of, these Terms.
        </li>
        <li>
          Your use of the Site is subject to any and all additional terms, policies, rules or guidelines applicable to the Site or certain features of the Site that we may post on or link to on the Site (<b>Additional Terms</b>), such as end-user license agreements for any downloadable applications that we may offer or rules applicable to particular features or content on the service, subject to the Changes to the Terms section below in Section 3. All such Additional Terms are hereby incorporated by reference into, and made a part of, these Terms.
        </li>
        <li>
          By using Our application, you are also bound by <a href="https://www.google.com/intl/en/policies/terms/">Google’s Terms of Service</a>
        </li>
      </ol>,
    ],
  },
  changes_to_the_terms: {
    title: 'Changes to the Terms',
    content: [
      <p>
        We reserve the right, at our discretion, to change these Terms on a going-forward basis at any time. Please check these Terms periodically for changes. In the event that a change to these Terms materially modifies your rights or obligations, we will make reasonable efforts to notify you of such change. We may provide notice through a pop-up or banner within the Site, by sending an email to any address you may have used to register for an account, or through other mechanisms. Additionally, if the changed Terms materially modify your rights or obligations, we may require you to provide consent by accepting the changed Terms. If we require your acceptance of the changed Terms, changes are effective only after your acceptance. If you do not accept the changed Terms, we may terminate your access to and use of the Site. All other changes are effective upon publication of the changed Terms. Disputes arising under these Terms will be resolved in accordance with the Terms in effect at the time the dispute arose.
      </p>,
    ],
  },
  accepting_an_acount: {
    title: 'Accepting an Account',
    content: [
      <p>
        We may limit the acceptance of users to particular jurisdictions and as permitted by applicable law. While we try to confirm users and accounts by email, your receipt of an email confirmation does not constitute our acceptance of an account or our confirmation of an offer to provide the Service. We reserve the right, without prior notice, to limit the number of users of the Service and to refuse the Service to you. We also may verify information before we accept you as a user.
      </p>,
    ],
  },
  faulty_services: {
    title: 'Faulty Services',
    content: [
      <p>
        If any Service you use is not working or faulty, we may offer a repair or refund (if you paid for the Services), as appropriate, in accordance with your legal rights. If you believe a Service was not working or faulty, you must inform us in writing at <a href="mailto:info@letsroundup.com">info@letsroundup.com</a> giving us your name, address and order reference. Nothing in this section affects your legal rights.
      </p>,
    ],
  },
  service_information: {
    title: 'Service information',
    content: [
      <p>
        While we have taken reasonable steps to depict Services as accurately as possible through the descriptions featured on the Site and our sales and marketing materials, the Service depicted may not exactly reflect the actual Service you receive and use.
      </p>,
    ],
  },
  warranty: {
    title: 'Warranty',
    content: [
      <p>
       We provide no warranties whatsoever, including (without limitation) any warranties as to the accuracy, effectiveness and uptime of the Service. Your use of the Service is at your risk.
      </p>,
    ],
  },
  third_party_services_and_linked_websites: {
    title: 'Third-Party Services and Linked Websites',
    content: [
      <p>
        RoundUp Social may provide tools and links through the Site that enable you to export information to third party services, including through features that allow you to link your account on RoundUp Social with an account on the third party service, such as Twitter or Facebook, or through our implementation of third party buttons (such as “like” or “share” buttons). By using these tools, you agree that we may transfer such information to the applicable third-party service. Such third party services are not under our control, and we are not responsible for their use of your exported information. The Site may, from time to time, include links to external sites, which may include links to third party offers and promotions. We include these to provide you with access to information, Services or services that you may find useful or interesting. We are not responsible for the content of these sites or for anything provided by them and do not guarantee that they will be continuously available. The fact that we include links to such external sites does not imply any endorsement of or association with their operators or promoters.
      </p>,
    ],
  },
  access_to_the_site: {
    title: 'Access to the Site',
    content: [
      <ol className={styles.orderedList}>
        <li>
          It is your responsibility to ensure your equipment (computer, laptop, netbook, tablet or other mobile device) meets all the necessary technical specifications to enable you to access and use the Site and is compatible with the Site.
        </li>
        <li>
          We cannot guarantee the continuous, uninterrupted or error-free operability of the Site. There may be times when certain features, parts or content of the Site, or the entire Site, become unavailable (whether on a scheduled or unscheduled basis) or are modified, suspended or withdrawn by us, in our sole discretion, without notice to you. You agree that we will not be liable to you or to any third party for any unavailability, modification, suspension or withdrawal of the Site, or any features, parts or content of the Site.
        </li>
      </ol>,
    ],
  },
  what_you_are_allowed_to_do: {
    title: 'What you are Allowed to do',
    content: [
      <p>
        You may only use the Site for non-commercial use and only in accordance with these terms and conditions. You may retrieve and display content from the Site on a computer screen, print and copy individual pages and, subject to the next section, store such pages in electronic form. Additional terms may also apply to certain features, parts or content of the Site and, where they apply, will be displayed on-screen or accessible via a link.
      </p>,
    ],
  },
  what_you_are_not_allowed_to_do: {
    title: 'What you are not Allowed to do',
    content: [
      <ol className={styles.orderedList}>
        <li>
          Except to the extent expressly set out in these terms and conditions, you are not allowed to:
          <ul className={styles.bulletedList}>
            <li>
              use the Site for any illegal purpose, or in violation of any local, state, national, or international law;
            </li>
            <li>
              violate, or encourage others to violate, the rights of third parties, including by infringing or misappropriating third party intellectual property rights;
            </li>
            <li>
              store pages of the Site on a server or other storage device connected to a network or create an electronic database by systematically downloading and storing all of the pages of the Site;
            </li>
            <li>
              interfere with security-related features of the Site, including without limitation by (a) disabling or circumventing features that prevent or limit use or copying of any content, or (b) reverse engineering or otherwise attempting to discover the source code of the Site or any part of the Site, except to the extent that activity is expressly permitted by applicable law;
            </li>
            <li>
              remove or change any content of the Site or attempt to circumvent security or interfere with the proper working of the Site or the servers on which it is hosted or violate the regulations, policies, or procedures of such networks, equipment, or servers; or
            </li>
            <li>
              create links to the Site from any other website, without our prior written consent.
            </li>
            <li>
              perform any fraudulent activity including impersonating any person or entity, claiming false affiliations, accessing the Site accounts of others without permission, or falsifying your age or date of birth;
            </li>
            <li>
              attempt to do any of the foregoing in this Section 13, or assist or permit any persons in engaging or attempting to engage in any of the activities described in this Section 13.
            </li>
          </ul>
        </li>
        <li>
          You must only use the Site and anything available from the Site for lawful purposes (complying with all applicable laws and regulations), in a responsible manner, and not in a way that might damage our name or reputation or that of any of our affiliates.
        </li>
        <li>
          All rights granted to you under these terms and conditions will terminate immediately in the event that you are in breach of any of them.
        </li>
      </ol>,
    ],
  },
  termination_of_use: {
    title: 'Termination of Use',
    content: [
      <p>
        If you violate any provision of these Terms, your permission to use the Site will terminate automatically. Additionally, RoundUp Social in its sole discretion may terminate your user account on the Site or suspend or terminate your access to the Site at any time, with or without notice. We also reserve the right to modify or discontinue the Site at any time (including, without limitation, by limiting or discontinuing certain features of the Site) without notice to you. We will have no liability whatsoever on account of any change to the Site or any suspension or termination of your access to or use of the Site. You may terminate your account at any time by contacting customer service at <a href="mailto:info@letsroundup.com">info@letsroundup.com</a>.
      </p>,
    ],
  },
  intellectual_property_rights: {
    title: 'Intellectual Property Rights',
    content: [
      <ol className={styles.orderedList}>
        <li>
          All intellectual property rights in our Services and any content of the Site (including text, graphics, software, photographs and other images, videos, sound, trademarks and logos) are owned by us or our licensors.
        </li>
        <li>
          You agree that you will not, directly or indirectly, alter or remove, and shall abide by, any patent, trademark, copyright, trade secret, proprietary or other notices contained on the Service containers. You shall not disassemble, decompile or reverse engineer or otherwise derive the components of the Services, and shall not permit others to do so.
        </li>
        <li>
          We appreciate hearing from you and welcome your comments regarding our Site and our Services. Please be advised, however, that if you send us creative ideas, suggestions, inventions or materials (<b>Creative Ideas</b>), we will:
          <ul className={styles.bulletedList}>
            <li>
              own, exclusively, all known or later discovered rights to the Creative Ideas;
            </li>
            <li>
              not be subject to any obligation of confidentiality and will not be liable for any use or disclosure of any Creative Ideas; and
            </li>
            <li>
              be entitled to unrestricted use of the Creative Ideas for any purpose whatsoever, commercial or otherwise, without compensation to you or any other person. Except as expressly set out here, nothing in these terms and conditions gives you any rights in respect of any intellectual property owned by us or our licensors and you acknowledge that you do not acquire any ownership rights by purchasing our Services or downloading content from the Site.
            </li>
          </ul>
        </li>
      </ol>,
    ],
  },
  indemnity: {
    title: 'Indemnity',
    content: [
      <p>
        You agree that you will be responsible for your use of the Site, and you agree to defend, indemnify, and hold harmless RoundUp Social and its officers, directors, employees, consultants, affiliates, subsidiaries and agents (collectively, the <b>RoundUp Social Entities</b>) from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected with: (a) your access to, use of, or alleged use of the Site; (b) your violation of these Terms or any representation, warranty, or agreements referenced in the Terms, or any applicable law or regulation; (c) your violation of any third-party right, including without limitation any intellectual property right, publicity, confidentiality, property or privacy right; or (d) any disputes or issues between you and any third party. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (and without limiting your indemnification obligations with respect to such matter), and in such case, you agree to cooperate with our defense of such claim.
      </p>,
    ],
  },
  disclaimers: {
    title: 'Disclaimers; No Warranties',
    content: [
      <p>
        THE SITE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SITE ARE PROVIDED "AS IS" AND ON AN "AS AVAILABLE" BASIS, WITHOUT WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE ROUNDUP SOCIAL ENTITIES SPECIFICALLY (BUT WITHOUT LIMITATION) DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, RELATING TO THE SITE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SITE, INCLUDING BUT NOT LIMITED TO: (A) ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY WARRANTIES ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. THE ROUNDUP SOCIAL ENTITIES DO NOT WARRANT THAT THE SITE OR ANY PART OF THE SITE, OR ANY MATERIALS OR CONTENT OFFERED THROUGH THE SITE, WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND DO NOT WARRANT THAT ANY OF THE FOREGOING WILL BE CORRECTED. IT IS YOUR RESPONSIBILITY TO IMPLEMENT APPROPRIATE IT SECURITY SAFEGUARDS (INCLUDING ANTI-VIRUS AND OTHER SECURITY CHECKS) TO SATISFY YOUR PARTICULAR REQUIREMENTS AS TO THE SAFETY AND RELIABILITY OF CONTENT.
      </p>,
      <p>
        PLEASE NOTE THAT THE ROUNDUP SOCIAL ENTITIES ARE NOT RESPONSIBLE IF THE HAPPY HOUR DATA SHOWN TO OUR USERS IS NOT ACCURATE.
      </p>,
    ],
  },
  liability: {
    title: 'Our liability; Limitation of Liability',
    content: [
      <p>
        Nothing in these terms and conditions shall limit or exclude our liability to you for any liability that may not, under United States law, be limited or excluded. Subject to this limitation:
      </p>,
      <p>
        IN NO EVENT WILL THE ROUNDUP SOCIAL ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SITE OR ANY MATERIALS OR CONTENT ON THE SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE OR ANY OTHER LEGAL THEORY, WHETHER OR NOT THE ROUNDUP SOCIAL ENTITIES HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
      </p>,
      <p>
        YOU AGREE THAT THE AGGREGATE LIABILITY OF THE ROUNDUP SOCIAL ENTITIES TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF RELATING TO THE USE OF OR ANY INABILITY TO USE THE SITE (INCLUDING ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SITE) OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO $100.
      </p>,
      <p>
        SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES. ACCORDINGLY, THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
      </p>,
      <p>
        FURTHERMORE, PLEASE NOTE THAT THE ROUNDUP SOCIAL ENTITIES ASSUME NO LIABILITY REGARDING THE INFORMATION PROVIDED TO OUR USERS IF THE APPLICABLE RESTAURANT DOESN’T HONOR SUCH RATES OR DEALS.
      </p>,
      <p>
        EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS TO ALLOCATE THE RISKS UNDER THESE TERMS BETWEEN THE PARTIES. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE LIMITATIONS IN THIS SECTION WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
      </p>,
    ],
  },
  governing_law: {
    title: 'Governing Law',
    content: [
      <p>
        These Terms will be governed by the laws of the State of California without regard to conflict of law principles. To the extent that any lawsuit or court proceeding is permitted under the Terms, you and RoundUp Social agree to submit to the personal and exclusive jurisdiction of the state courts and federal courts located within San Francisco, California, for the purpose of litigating all such disputes.
      </p>,
    ],
  },
  general: {
    title: 'General',
    content: [
      <ol className={styles.orderedList}>
        <li>
          You may not transfer or assign any or all of your rights or obligations under these terms and conditions.
        </li>
        <li>
          All notices given by you to us must be given in writing to the address set out at the end of these terms and conditions. We may give notice to you at either the email or postal address you provide to us when placing an order.
        </li>
        <li>
          If we fail to enforce any of our rights, that does not result in a waiver of that right.
        </li>
        <li>
          If any provision of these terms and conditions is found to be unenforceable, all other provisions shall remain unaffected.
        </li>
        <li>
          These terms and conditions may not be varied except with our express written consent.
        </li>
        <li>
          These terms and conditions and any document expressly referred to in them represent the entire agreement between you and us in relation to the subject matter of any order.
        </li>
      </ol>,
    ],
  },
  dispute_resolution_and_arbitration: {
    title: 'Dispute Resolution and Arbitration',
    content: [
      <ol className={styles.orderedList}>
        <li>
          Generally. In the interest of resolving disputes between you and RoundUp Social in the most expedient and cost effective manner, you and RoundUp Social agree that any and all disputes arising in connection with these Terms will be resolved by binding arbitration. Arbitration is more informal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or jury, may allow for more limited discovery than in court, and can be subject to very limited review by courts. Arbitrators can award the same damages and relief that a court can award. Our agreement to arbitrate disputes includes, but is not limited to all claims arising out of or relating to any aspect of these Terms, whether based in contract, tort, statute, fraud, misrepresentation or any other legal theory, and regardless of whether the claims arise during or after the termination of these Terms. YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND ROUNDUP SOCIAL ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.
        </li>
        <li>
          Exceptions. We both agree that nothing in the Terms will be deemed to waive, preclude, or otherwise limit either of our right to: (a) bring an individual action in small claims court; (b) pursue enforcement actions through applicable federal, state, or local agencies where such actions are available; (c) seek injunctive relief in a court of law; or (d) to file suit in a court of law to address intellectual property infringement claims.
        </li>
        <li>
          Arbitrator. Any arbitration between you and RoundUp Social will be governed by the Commercial Dispute Resolution Procedures and the Supplementary Procedures for Consumer Related Disputes (collectively, <b>AAA Rules</b>) of the American Arbitration Association (<b>AAA</b>), as modified by these Terms, and will be administered by the AAA. The AAA Rules and filing forms are available online at www.adr.org, by calling the AAA at 1-800-778-7879, or by contacting RoundUp Social.
        </li>
        <li>
          Notice; Process. A party who intends to seek arbitration must first send a written notice of the dispute to the other, by certified mail or Federal Express (signature required), or in the event that we do not have a physical address on file for you, by electronic mail ("Notice"). RoundUp Social's address for Notice is: RocketSpace – 4th Floor – RoundUp Social Inc, 180 Sansome Street, San Francisco, California, 94133. The Notice must: (a) describe the nature and basis of the claim or dispute; and (b) set forth the specific relief sought (<b>Demand</b>). We agree to use good faith efforts to resolve the claim directly, but if we do not reach an agreement to do so within 30 days after the Notice is received, you or RoundUp Social may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by you or RoundUp Social will not be disclosed to the arbitrator until after the arbitrator makes a final decision and award, if any. In the event our dispute is finally resolved through arbitration in your favor, RoundUp Social will pay you: (x) the amount awarded by the arbitrator, if any, (y) the last written settlement amount offered by RoundUp Social in settlement of the dispute prior to the arbitrator’s award; or (z) $1,000.00, whichever is greater.
        </li>
        <li>
          Fees. In the event that you commence arbitration in accordance with these Terms, RoundUp Social will reimburse you for your payment of the filing fee, unless your claim is for greater than $10,000, in which case the payment of any fees will be decided by the AAA Rules. Any arbitration hearings will take place at a location to be agreed upon in San Francisco, California, provided that if the claim is for $10,000 or less, you may choose whether the arbitration will be conducted: (a) solely on the basis of documents submitted to the arbitrator; (b) through a non-appearance based telephonic hearing; or (c) by an in-person hearing as established by the AAA Rules in the county (or parish) of your billing address. If the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA Rules. In such case, you agree to reimburse RoundUp Social for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules. Regardless of the manner in which the arbitration is conducted, the arbitrator will issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within 14 days of the arbitrator’s ruling on the merits.
        </li>
        <li>
          No Class Actions. YOU AND ROUNDUP SOCIAL AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and RoundUp Social agree otherwise, the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a representative or class proceeding.
        </li>
        <li>
          Modifications. In the event that RoundUp Social makes any future change to this arbitration provision (other than a change to RoundUp Social's address for Notice), you may reject any such change by sending us written notice within 30 days of the change to RoundUp Social's address for Notice, in which case your account with RoundUp Social will be immediately terminated and this arbitration provision, as in effect immediately prior to the amendments you reject will survive.
        </li>
        <li>
          Enforceability. If the entirety of this Section 21 is found to be unenforceable, then the entirety of this Section 21 will be null and void and, in such case, the parties agree that the exclusive jurisdiction and venue described in Section 19 will govern any action arising out of or related to these Terms.
        </li>
      </ol>,
    ],
  },
  contact: contactUs,
};
