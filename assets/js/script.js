document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('sidebar').innerHTML = `
        <h3 class="text-center mb-4 fw-bold">PRO DASH</h3>
        <nav class="nav flex-column gap-2">
            <a class="nav-link text-white active bg-primary rounded p-2" href="#"><i class="fas fa-home me-2"></i> Overview</a>
            <a class="nav-link text-white-50 p-2" href="#"><i class="fas fa-chart-pie me-2"></i> Analytics</a>
            <a class="nav-link text-white-50 p-2" href="#"><i class="fas fa-users me-2"></i> Customers</a>
            <a class="nav-link text-white-50 p-2" href="#"><i class="fas fa-cog me-2"></i> Settings</a>
        </nav>
    `;

    
    document.querySelector('.top-nav').innerHTML = `
        <h5 class="m-0">Dashboard Overview</h5>
        <div class="user-profile">
            <span class="text-muted me-2 small">Hisham Ramadan</span>
            <img src="https://ui-avatars.com/api/?name=Hisham" class="rounded-circle" width="35">
        </div>
    `;

    
    const stats = [
        { title: 'Total Sales', value: '$24,500', icon: 'fa-shopping-bag', color: 'text-primary' },
        { title: 'Avg Order', value: '$1,200', icon: 'fa-wallet', color: 'text-success' },
        { title: 'New Leads', value: '450', icon: 'fa-user-plus', color: 'text-warning' }
    ];

    document.getElementById('statsCards').innerHTML = stats.map(s => `
        <div class="col-md-4">
            <div class="card p-3 shadow-sm border-0 d-flex flex-row align-items-center gap-3">
                <div class="stat-icon bg-light ${s.color}"><i class="fas ${s.icon} fs-4"></i></div>
                <div><h6 class="text-muted mb-0">${s.title}</h6><h4 class="fw-bold mb-0">${s.value}</h4></div>
            </div>
        </div>
    `).join('');

    
    new Chart(document.getElementById('revenueChart'), {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'Weekly Earnings ($)',
                data: [400, 700, 500, 900, 600, 1100],
                backgroundColor: '#0d6efd',
                borderRadius: 5
            }]
        }
    });

    
    document.getElementById('orderList').innerHTML = `
        <h6 class="mb-3">Recent Invoices</h6>
        <table class="table small">
            <thead><tr class="text-muted"><th>ID</th><th>Amount</th></tr></thead>
            <tbody>
                <tr><td>#INV-90</td><td>$120.00</td></tr>
                <tr><td>#INV-88</td><td>$340.50</td></tr>
                <tr><td>#INV-87</td><td>$99.00</td></tr>
            </tbody>
        </table>
    `;
});