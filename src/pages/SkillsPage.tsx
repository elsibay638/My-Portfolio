import { useState } from 'react';
import { X, CheckCircle2, Award, Cpu, Shield, Server, Wifi, Wrench, Network, Globe, Radio, Lock, Router, Flame } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  category: string;
  icon: typeof Cpu;
  level: string;
  proficiency: number;
  summary: string;
  details: string[];
}

const skills: Skill[] = [
  {
    id: 'ccna',
    title: 'CCNA',
    category: 'Cisco Certification',
    icon: Award,
    level: 'Associate',
    proficiency: 95,
    summary: 'Cisco Certified Network Associate — foundational networking knowledge and routing/switching skills.',
    details: [
      'IP addressing, subnetting (IPv4/IPv6), and VLAN architecture',
      'Routing protocols: OSPF, static routing, inter-VLAN routing',
      'Switching fundamentals: STP, EtherChannel, port security',
      'WAN technologies and basic network security principles',
      'Device management, SSH access, and configuration backup',
      'Troubleshooting connectivity and Layer 1-3 issues',
    ],
  },
  {
    id: 'ccnp',
    title: 'CCNP',
    category: 'Cisco Certification',
    icon: Award,
    level: 'Professional',
    proficiency: 88,
    summary: 'Cisco Certified Network Professional — advanced routing, switching, and enterprise network design.',
    details: [
      'Advanced OSPF and BGP multi-area and multi-AS deployment',
      'Layer 3 redundancy: HSRP, VRRP, and GLBP',
      'Complex switching: MSTP, private VLANs, and port aggregation',
      'QoS implementation for voice and video traffic',
      'Layer 2/3 security: DHCP snooping, ARP inspection, ACLs',
      'Network automation concepts and device programmability',
    ],
  },
  {
    id: 'mcsa',
    title: 'MCSA',
    category: 'Microsoft Certification',
    icon: Award,
    level: 'Associate',
    proficiency: 85,
    summary: 'Microsoft Certified Solutions Associate — Windows Server administration and infrastructure management.',
    details: [
      'Windows Server installation, configuration, and maintenance',
      'Active Directory Domain Services (AD DS) management',
      'Group Policy creation, linking, and troubleshooting',
      'DNS, DHCP, and file/print services administration',
      'Hyper-V virtualization and VM lifecycle management',
      'Server hardening and patch management',
    ],
  },
  {
    id: 'windows-admin',
    title: 'Windows Administration',
    category: 'Systems',
    icon: Server,
    level: 'Advanced',
    proficiency: 90,
    summary: 'Comprehensive Windows Server and client administration across enterprise environments.',
    details: [
      'Server roles and features deployment (File, Print, Web, RDS)',
      'Active Directory user, group, and OU management',
      'PowerShell scripting for bulk administrative tasks',
      'Performance monitoring, event log analysis, and diagnostics',
      'Backup, restore, and disaster recovery procedures',
      'Windows deployment and image management (WDS/MDT)',
    ],
  },
  {
    id: 'security',
    title: 'Network Security',
    category: 'Security',
    icon: Shield,
    level: 'Advanced',
    proficiency: 87,
    summary: 'Securing network infrastructure with firewalls, VPNs, access control, and threat mitigation.',
    details: [
      'Firewall configuration and rule management (ACLs, NAT, zones)',
      'Site-to-site and remote-access VPN setup (IPsec, SSL)',
      'Access control lists and port security enforcement',
      'Threat detection, intrusion prevention, and mitigation',
      'Endpoint protection and network segmentation',
      'Security auditing and compliance monitoring',
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    category: 'Operations',
    icon: Wrench,
    level: 'Expert',
    proficiency: 92,
    summary: 'Systematic diagnosis and resolution of complex network and system issues.',
    details: [
      'Layer-by-layer OSI model fault isolation methodology',
      'Packet capture and analysis (Wireshark, debug commands)',
      'Connectivity, routing, and switching fault resolution',
      'Performance bottleneck identification and tuning',
      'Log correlation and root cause analysis',
      'Rapid incident response and service restoration',
    ],
  },
  {
    id: 'routing',
    title: 'Routing',
    category: 'Networking',
    icon: Network,
    level: 'Expert',
    proficiency: 91,
    summary: 'Design and configuration of enterprise routing across multi-protocol environments.',
    details: [
      'OSPF area design, summarization, and convergence tuning',
      'BGP peering, path manipulation, and route filtering',
      'Static and policy-based routing for traffic engineering',
      'Route redistribution between dissimilar protocols',
      'IPv6 routing and dual-stack deployment',
      'Redundancy protocols: HSRP, VRRP, and GLBP',
    ],
  },
  {
    id: 'switching',
    title: 'Switching',
    category: 'Networking',
    icon: Wifi,
    level: 'Expert',
    proficiency: 91,
    summary: 'Layer 2 network design, VLAN architecture, and switching optimization.',
    details: [
      'VLAN design, trunking (802.1Q), and inter-VLAN routing',
      'Spanning Tree Protocol (RSTP, MSTP) tuning',
      'EtherChannel / LAG configuration for high availability',
      'Port security, DHCP snooping, and ARP inspection',
      'Multilayer switching and QoS on switches',
      'Campus network design and access-distribution-core model',
    ],
  },
  {
    id: 'bgp',
    title: 'BGP',
    category: 'Routing Protocol',
    icon: Globe,
    level: 'Advanced',
    proficiency: 88,
    summary: 'Border Gateway Protocol configuration for inter-domain routing and traffic engineering.',
    details: [
      'eBGP and iBGP peering configuration and troubleshooting',
      'AS path manipulation and route filtering with prefix-lists',
      'Route reflectors and BGP Confederations for scalability',
      'BGP attributes: Local Preference, MED, AS-Path, communities',
      'Multihoming and traffic engineering with multiple ISPs',
      'BGP convergence tuning and route dampening',
    ],
  },
  {
    id: 'mpls',
    title: 'MPLS',
    category: 'Networking',
    icon: Radio,
    level: 'Advanced',
    proficiency: 85,
    summary: 'Multiprotocol Label Switching for scalable, efficient enterprise and service provider networks.',
    details: [
      'LDP label distribution and LSP path setup',
      'MPLS VPNs (L3VPN) with VRF and MP-BGP',
      'Traffic engineering tunnels and fast reroute',
      'MPLS QoS and EXP bit marking',
      'L2VPN and VPLS for transparent LAN services',
      'Troubleshooting label propagation and forwarding issues',
    ],
  },
  {
    id: 'vpn',
    title: 'VPN',
    category: 'Security',
    icon: Lock,
    level: 'Advanced',
    proficiency: 89,
    summary: 'Virtual Private Network setup for secure remote access and site-to-site connectivity.',
    details: [
      'Site-to-site IPsec VPN with IKEv1/IKEv2 negotiation',
      'Remote access VPN (SSL VPN, AnyConnect) configuration',
      'VPN encryption, hashing, and DH group selection',
      'Split tunneling and full tunnel policies',
      'NAT traversal (NAT-T) and VPN over overlapping subnets',
      'High availability VPN with redundant peers and DPD',
    ],
  },
  {
    id: 'cisco-devices',
    title: 'Cisco Devices',
    category: 'Hardware',
    icon: Router,
    level: 'Expert',
    proficiency: 92,
    summary: 'Hands-on configuration and management of Cisco routers, switches, and security appliances.',
    details: [
      'Cisco IOS and IOS-XE command-line configuration',
      'Router, switch, and ASA firewall deployment',
      'Device onboarding: hostname, management IP, SSH, banners',
      'Firmware upgrades, password recovery, and licensing',
      'Configuration backup and restore with TFTP/FTP',
      'Cisco DNA Center and device management tools',
    ],
  },
  {
    id: 'fortigate',
    title: 'Fortigate',
    category: 'Security',
    icon: Flame,
    level: 'Advanced',
    proficiency: 87,
    summary: 'Fortinet FortiGate next-generation firewall administration and policy management.',
    details: [
      'FortiOS configuration and virtual domain (VDOM) management',
      'Firewall policies, address objects, and service groups',
      'IPsec and SSL VPN setup on FortiGate appliances',
      'Web filtering, application control, and antivirus profiles',
      'Intrusion prevention and FortiGuard subscription services',
      'Routing on FortiGate: static, OSPF, and BGP integration',
    ],
  },
  {
    id: 'firewall-config',
    title: 'Firewall Configuration',
    category: 'Security',
    icon: Shield,
    level: 'Advanced',
    proficiency: 88,
    summary: 'Design and implementation of firewall rules, zones, and security policies across vendors.',
    details: [
      'Security zone design and inter-zone policy creation',
      'Rule ordering, NAT policies, and access control lists',
      'Stateful inspection and connection tracking',
      'DMZ architecture and public-facing service exposure',
      'Logging, reporting, and traffic analysis',
      'Vendor-agnostic best practices: Cisco ASA, Fortinet, pfSense',
    ],
  },
];

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            Technical Skills
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
            Certifications &amp; Expertise
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Click on any skill card to view a detailed breakdown of my capabilities, certifications, and hands-on experience.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className="group text-left bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-800 px-2.5 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-3">{skill.level}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{skill.summary}</p>

                  {/* Proficiency bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                      <span>Proficiency</span>
                      <span className="text-cyan-400 font-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500 group-hover:from-cyan-400 group-hover:to-blue-400"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>

                  <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                    Click to expand
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-cyan-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <selectedSkill.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100">{selectedSkill.title}</h2>
                  <p className="text-sm text-cyan-400 font-medium">
                    {selectedSkill.level} &middot; {selectedSkill.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-slate-500 hover:text-slate-200 hover:bg-slate-800 rounded-lg p-2 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6">
              <p className="text-slate-300 leading-relaxed mb-6">{selectedSkill.summary}</p>

              {/* Proficiency */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Proficiency Level</span>
                  <span className="text-cyan-400 font-semibold">{selectedSkill.proficiency}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    style={{ width: `${selectedSkill.proficiency}%` }}
                  />
                </div>
              </div>

              {/* Details list */}
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
                Key Capabilities
              </h3>
              <ul className="space-y-2.5">
                {selectedSkill.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
