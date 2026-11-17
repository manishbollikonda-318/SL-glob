/**
 * NEXUS — Cinematic AI Agent Dashboard
 * Scripting Languages Lab (SL LAB) Micro Project | GRIET
 * Minimal Vanilla JavaScript for Interactive UI Simulation
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Element Selectors ---
  const systemClock = document.getElementById('systemClock');
  const sidebar = document.getElementById('sidebar');
  const appContainer = document.querySelector('.app-container');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const navItems = document.querySelectorAll('.nav-item');
  const timePills = document.querySelectorAll('.time-filter-pills .pill');
  const barCols = document.querySelectorAll('.chart-col');
  const terminalLogs = document.getElementById('terminalLogs');
  const terminalInput = document.getElementById('terminalInput');
  const runCommandBtn = document.getElementById('runCommandBtn');
  const termClose = document.getElementById('termClose');
  const termMinimize = document.getElementById('termMinimize');
  const termMaximize = document.getElementById('termMaximize');
  const toastContainer = document.getElementById('toastContainer');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const confirmOverrideBtn = document.getElementById('confirmOverrideBtn');
  const overrideModal = document.getElementById('overrideModal');
  const throttleSlider = document.getElementById('throttleSlider');
  const throttleValueDisplay = document.getElementById('throttleValueDisplay');
  const triggerSwarmScan = document.getElementById('triggerSwarmScan');
  const simulateSpikeBtn = document.getElementById('simulateSpikeBtn');
  const agentSearchInput = document.getElementById('agentSearchInput');
  const agentCards = document.querySelectorAll('.agent-card');

  // Quick action buttons
  const btnDeploySwarm = document.getElementById('btnDeploySwarm');
  const btnPurgeContext = document.getElementById('btnPurgeContext');
  const btnQuantumSync = document.getElementById('btnQuantumSync');
  const btnEmergencyHalt = document.getElementById('btnEmergencyHalt');

  // KPI elements for dynamic simulation
  const metricAgents = document.getElementById('metricAgents');
  const metricLatency = document.getElementById('metricLatency');
  const metricThroughput = document.getElementById('metricThroughput');

  // =========================================================================
  // 1. Live Clock Telemetry
  // =========================================================================
  function updateClock() {
    const now = new Date();
    const utcString = now.toUTCString().split(' ')[4] + ' UTC';
    if (systemClock) {
      systemClock.textContent = utcString;
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // =========================================================================
  // 2. Sidebar Navigation & Collapse Toggle
  // =========================================================================
  if (sidebarToggle && appContainer) {
    sidebarToggle.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        sidebar.classList.toggle('mobile-open');
      } else {
        appContainer.classList.toggle('sidebar-collapsed');
      }
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      const tabName = item.dataset.tab;
      showToast(`Switched active HUD view to: [${tabName.toUpperCase()}]`);
    });
  });

  // =========================================================================
  // 3. Interactive Chart Timeframe Filter (CSS Custom Property Updates)
  // =========================================================================
  const timeframePresets = {
    '1h': [35, 50, 72, 88, 70, 60, 65, 80, 90, 75, 62, 70],
    '6h': [40, 55, 65, 82, 91, 58, 74, 85, 96, 78, 65, 76],
    '12h': [45, 62, 78, 92, 84, 56, 70, 88, 95, 81, 68, 74],
    '24h': [25, 30, 48, 65, 80, 92, 86, 74, 60, 52, 45, 60]
  };

  timePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const tf = pill.dataset.time;
      const values = timeframePresets[tf] || timeframePresets['12h'];

      barCols.forEach((col, index) => {
        if (values[index] !== undefined) {
          col.style.setProperty('--val', `${values[index]}%`);
          const tooltip = col.querySelector('.bar-tooltip');
          if (tooltip) {
            tooltip.textContent = `Interval ${index + 1} • ${values[index]}% load`;
          }
        }
      });
      showToast(`Neural Inference chart re-indexed to [${tf.toUpperCase()}] window`);
    });
  });

  // =========================================================================
  // 4. Interactive Terminal Output & Command Interpreter
  // =========================================================================
  function getTimestamp() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    return `[${hh}:${mm}:${ss}]`;
  }

  function appendLog(prefix, msg, type = 'info') {
    if (!terminalLogs) return;
    const line = document.createElement('div');
    line.className = `log-line log-${type}`;

    const timeSpan = document.createElement('span');
    timeSpan.className = 'timestamp';
    timeSpan.textContent = getTimestamp();

    const prefixSpan = document.createElement('span');
    prefixSpan.className = 'prefix';
    prefixSpan.textContent = prefix + ':';

    const msgSpan = document.createElement('span');
    msgSpan.className = 'msg';
    msgSpan.textContent = ' ' + msg;

    line.appendChild(timeSpan);
    line.appendChild(prefixSpan);
    line.appendChild(msgSpan);

    terminalLogs.appendChild(line);
    terminalLogs.scrollTop = terminalLogs.scrollHeight;
  }

  function executeTerminalCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    appendLog('USER_CMD', cmdRaw, 'cyan');

    switch (cmd) {
      case 'help':
        appendLog('CONSOLE_HELP', 'Available commands: [status, scan, purge, optimize, topology, clear, help]', 'system');
        break;
      case 'status':
        appendLog('STATUS_OK', 'Swarm Quorum: 99.98% | Active Nodes: 8 | Throughput: 4.82M tok/s', 'success');
        break;
      case 'scan':
        appendLog('SCAN_INIT', 'Auditing peer Byzantine consensus across HYD-SOUTH cluster...', 'info');
        setTimeout(() => {
          appendLog('SCAN_COMPLETE', 'All 1,024 agent threads synchronized without drift.', 'success');
          showToast('Cluster vector audit completed: 0 anomalies');
        }, 800);
        break;
      case 'purge':
        appendLog('KV_CACHE', 'Flushing attention matrices and pruning temporary embeddings...', 'warn');
        setTimeout(() => {
          appendLog('PURGE_DONE', 'Freed 14.2 GB of dynamic H100 scratchpad memory.', 'success');
          showToast('KV Cache flushed successfully');
        }, 600);
        break;
      case 'optimize':
        appendLog('OPT_ENGINE', 'Re-compiling FlashAttention-3 kernels for FP8 precision...', 'info');
        setTimeout(() => {
          appendLog('OPT_DONE', 'Latency lowered by 1.4ms across active pipelines.', 'success');
        }, 700);
        break;
      case 'topology':
        appendLog('MESH_MAP', 'Torus 8D Topology: 8 nodes online. Interconnect latency: 0.12ms.', 'system');
        break;
      case 'clear':
        if (terminalLogs) terminalLogs.innerHTML = '';
        appendLog('SYS_RESET', 'Console buffer cleared.', 'system');
        break;
      default:
        appendLog('ERR_UNKNOWN', `Unrecognized directive '${cmdRaw}'. Type 'help' for command listing.`, 'error');
        break;
    }
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeTerminalCommand(terminalInput.value);
        terminalInput.value = '';
      }
    });
  }

  if (runCommandBtn && terminalInput) {
    runCommandBtn.addEventListener('click', () => {
      executeTerminalCommand(terminalInput.value);
      terminalInput.value = '';
    });
  }

  if (termClose) {
    termClose.addEventListener('click', () => {
      appendLog('TERMINAL', 'Session hidden. Click raw terminal in sidebar to re-open.', 'warn');
    });
  }
  if (termMinimize) {
    termMinimize.addEventListener('click', () => {
      terminalLogs.style.display = terminalLogs.style.display === 'none' ? 'flex' : 'none';
    });
  }
  if (termMaximize) {
    termMaximize.addEventListener('click', () => {
      const widget = document.querySelector('.terminal-widget');
      if (widget) widget.classList.toggle('maximized');
      showToast('Toggled terminal viewport focus');
    });
  }

  // =========================================================================
  // 5. Toast Notification System
  // =========================================================================
  function showToast(message, duration = 3200) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="beacon-pulse green"></span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // =========================================================================
  // 6. Modal Controls & Slider
  // =========================================================================
  function openModal() {
    if (overrideModal) {
      overrideModal.removeAttribute('hidden');
    }
  }

  function closeModal() {
    if (overrideModal) {
      overrideModal.setAttribute('hidden', '');
    }
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

  if (overrideModal) {
    overrideModal.addEventListener('click', (e) => {
      if (e.target === overrideModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !overrideModal.hasAttribute('hidden')) {
        closeModal();
      }
    });
  }

  if (throttleSlider && throttleValueDisplay) {
    throttleSlider.addEventListener('input', (e) => {
      throttleValueDisplay.textContent = `${e.target.value}%`;
    });
  }

  if (confirmOverrideBtn) {
    confirmOverrideBtn.addEventListener('click', () => {
      const selectedRadio = document.querySelector('input[name="overrideMode"]:checked');
      const mode = selectedRadio ? selectedRadio.value : 'soft';
      const throttle = throttleSlider ? throttleSlider.value : 85;
      
      closeModal();
      appendLog('OVERRIDE', `Elevation protocol [${mode.toUpperCase()}] committed at ${throttle}% throttle.`, 'warn');
      showToast(`Override protocol activated: [${mode.toUpperCase()}]`);
    });
  }

  // =========================================================================
  // 7. Interactive Swarm & Action Buttons
  // =========================================================================
  if (triggerSwarmScan) {
    triggerSwarmScan.addEventListener('click', () => {
      showToast('Initiating recursive swarm handshake scan...');
      appendLog('SWARM_SCAN', 'Pinging distributed nodes across Telangana fiber loop...', 'cyan');
      setTimeout(() => {
        appendLog('SWARM_SCAN', 'All 1,024 neural sub-agents verified healthy.', 'success');
      }, 700);
    });
  }

  if (simulateSpikeBtn) {
    simulateSpikeBtn.addEventListener('click', () => {
      if (metricThroughput) metricThroughput.innerHTML = '7.45<small>M</small>';
      if (metricLatency) metricLatency.innerHTML = '18.4<small>ms</small>';
      appendLog('LOAD_SPIKE', 'Burst traffic ingested: 2.6M token surge. Autoscaling 32 pods...', 'warn');
      showToast('Simulated load spike applied');

      setTimeout(() => {
        if (metricThroughput) metricThroughput.innerHTML = '4.82<small>M</small>';
        if (metricLatency) metricLatency.innerHTML = '11.8<small>ms</small>';
        appendLog('AUTOSCALE', 'Workload stabilized. Telemetry restored to nominal levels.', 'success');
      }, 4000);
    });
  }

  if (btnDeploySwarm) {
    btnDeploySwarm.addEventListener('click', () => {
      if (metricAgents) {
        const current = parseInt(metricAgents.textContent.replace(',', '')) || 1024;
        metricAgents.textContent = (current + 64).toLocaleString();
      }
      appendLog('SWARM_DEPLOY', 'Instantiated 64 new micro-agents on Node Beta.', 'success');
      showToast('+64 AI Agent Threads Deployed');
    });
  }

  if (btnPurgeContext) {
    btnPurgeContext.addEventListener('click', () => {
      executeTerminalCommand('purge');
    });
  }

  if (btnQuantumSync) {
    btnQuantumSync.addEventListener('click', () => {
      appendLog('QUANTUM_SYNC', 'Re-computing LoRA adapter weights across 8 H100 units...', 'info');
      showToast('Re-indexing LoRA weights in progress');
      setTimeout(() => {
        appendLog('QUANTUM_SYNC', 'LoRA adapter convergence reached at delta < 0.001.', 'success');
      }, 900);
    });
  }

  if (btnEmergencyHalt) {
    btnEmergencyHalt.addEventListener('click', () => {
      appendLog('SYS_HALT', 'EMERGENCY PAUSE: Background tasks throttled to standby.', 'error');
      showToast('System paused: Standby mode engaged');
    });
  }

  // =========================================================================
  // 8. Global Search Filter
  // =========================================================================
  if (agentSearchInput) {
    agentSearchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      agentCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });

    // Keyboard shortcut Cmd/Ctrl + K
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        agentSearchInput.focus();
        showToast('Search input focused');
      }
    });
  }

  // =========================================================================
  // 9. Periodic Simulated Telemetry Logs (Live Ambience)
  // =========================================================================
  const backgroundLogStream = [
    { prefix: 'SYNAPSE_TENSOR', msg: 'Softmax temperature scaled to 0.72 for low hallucination.', type: 'info' },
    { prefix: 'PEER_HEARTBEAT', msg: 'Latency check Node-07 to Node-08: 0.14ms nominal.', type: 'system' },
    { prefix: 'AGENT_AETHER', msg: 'Completed heuristic vector synthesis on prompt batch #4812.', type: 'cyan' },
    { prefix: 'SHIELD_MONITOR', msg: 'Zero-day prompt injection probe isolated and discarded.', type: 'warn' }
  ];

  let streamIndex = 0;
  setInterval(() => {
    if (document.visibilityState === 'visible') {
      const entry = backgroundLogStream[streamIndex % backgroundLogStream.length];
      appendLog(entry.prefix, entry.msg, entry.type);
      streamIndex++;
    }
  }, 12000);

  // Initial welcome toast
  setTimeout(() => {
    showToast('Nexus Command Center v4.8 initialized');
  }, 600);
});
